-- Create the contact form submissions table
CREATE TABLE IF NOT EXISTS contactFormSubmission (
    submissionId TEXT PRIMARY KEY,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    service TEXT,
    project TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_contact_email ON contactFormSubmission(email);

-- Create an index on createdAt for sorting
CREATE INDEX IF NOT EXISTS idx_contact_created ON contactFormSubmission(createdAt);
