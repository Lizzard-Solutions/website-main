/// <reference types="@cloudflare/workers-types" />
import { getAssetFromKV } from "@cloudflare/kv-asset-handler";

// Define the environment interface
interface Env {
  TURNSTILE_SECRET: string;
  DB: D1Database;
}

// Define the contact form request body interface
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  project: string;
  captchaToken: string;
}

// Define the Turnstile verification response interface
interface TurnstileResponse {
  success: boolean;
  'error-codes'?: string[];
  challenge_ts?: string;
  hostname?: string;
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    // Handle API endpoints
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const { name, email, company, service, project, captchaToken }: ContactFormData = await request.json();

        // Verify Turnstile (optional - you can remove this if not using captcha)
        if (captchaToken) {
          const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              secret: env.TURNSTILE_SECRET,
              response: captchaToken
            })
          });

          const verifyData: TurnstileResponse = await verifyRes.json();
          if (!verifyData.success) {
            return new Response(JSON.stringify({ success: false, error: "Captcha failed" }), { 
              status: 400,
              headers: { "Content-Type": "application/json" }
            });
          }
        }

        // Insert into D1
        const submissionId = crypto.randomUUID();
        await env.DB.prepare(
          `INSERT INTO contactFormSubmission (submissionId, fullName, email, company, service, project)
           VALUES (?, ?, ?, ?, ?, ?)`
        ).bind(submissionId, name, email, company, service, project).run();

        return new Response(JSON.stringify({ success: true, id: submissionId }), { 
          headers: { "Content-Type": "application/json" } 
        });
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        return new Response(JSON.stringify({ success: false, error: errorMessage }), { 
          status: 500, 
          headers: { "Content-Type": "application/json" } 
        });
      }
    }

    // Serve static assets and handle SPA routing
    try {
      // For SPA routing, serve index.html for all non-API routes
      if (!url.pathname.startsWith('/api/') && !url.pathname.includes('.')) {
        const indexRequest = new Request(`${url.origin}/index.html`, request);
        return await getAssetFromKV({ request: indexRequest, waitUntil: ctx.waitUntil });
      }

      // Serve static assets
      return await getAssetFromKV({ request, waitUntil: ctx.waitUntil });
    } catch (e) {
      // If asset not found, try serving index.html for SPA fallback
      try {
        const indexRequest = new Request(`${url.origin}/index.html`, request);
        return await getAssetFromKV({ request: indexRequest, waitUntil: ctx.waitUntil });
      } catch {
        return new Response("Not Found", { status: 404 });
      }
    }
  }
} satisfies ExportedHandler<Env>;
