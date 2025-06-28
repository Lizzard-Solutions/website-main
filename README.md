# Lizzard Solutions Portfolio Website

A professional IT consultancy portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Internationalization**: English and Serbian language support
- **Contact Form**: Functional contact form with email notifications
- **Modern Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **SEO Optimized**: Proper meta tags and semantic HTML

## Services Highlighted

- Full Stack Development
- Cloud Solutions
- Cybersecurity
- IT Consulting
- Automation & Data Scraping
- AI Integration
- IoT Devices

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- Supabase account
- Resend account (for email functionality)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file with:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. Set up Supabase Edge Function environment variables:
   In your Supabase dashboard, add these secrets:
   ```
   RESEND_API_KEY=your_resend_api_key
   TO_EMAIL=your_email_address
   ```

### Development

```bash
npm run dev
```

### Building for Production

```bash
npm run build
```

## Contact Form Setup

The contact form uses Supabase Edge Functions to send email notifications via Resend.

### Required Environment Variables

**Frontend (.env):**
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

**Supabase Edge Function Secrets:**
- `RESEND_API_KEY`: Your Resend API key
- `TO_EMAIL`: Email address to receive notifications

### Setting up Resend

1. Sign up at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add the API key to your Supabase project secrets

### Deploying Edge Functions

The edge function is automatically deployed when you connect to Supabase. Make sure to:

1. Connect your project to Supabase
2. Add the required environment variables/secrets
3. The edge function will be available at: `https://your-project.supabase.co/functions/v1/send-contact-email`

## Deployment

The site can be deployed to any static hosting service:

- **Netlify**: Automatic deployment from Git
- **Vercel**: Zero-config deployment
- **GitHub Pages**: Static site hosting

## License

© 2025 Lizzard Solutions. All rights reserved.