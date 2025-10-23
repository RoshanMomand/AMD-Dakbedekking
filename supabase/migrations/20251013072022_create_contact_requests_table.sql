/*
  # Create contact requests table for AMD Dakwerken

  1. New Tables
    - `contact_requests`
      - `id` (uuid, primary key) - Unique identifier for each request
      - `name` (text) - Contact person name
      - `company` (text) - Company name
      - `phone` (text) - Phone number
      - `email` (text) - Email address
      - `description` (text) - Project description
      - `preferred_period` (text) - Desired availability period
      - `created_at` (timestamptz) - Request submission timestamp
      
  2. Security
    - Enable RLS on `contact_requests` table
    - No public read access (only authenticated admin users should read submissions)
    - Allow anonymous inserts for the contact form
    
  3. Notes
    - This table stores all contact form submissions from the website
    - Data is kept secure with RLS policies
    - Created_at defaults to current timestamp for tracking
*/

CREATE TABLE IF NOT EXISTS contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  company text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  description text NOT NULL,
  preferred_period text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_requests ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to submit contact requests
CREATE POLICY "Anyone can submit contact requests"
  ON contact_requests
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admin) can view submissions
CREATE POLICY "Only authenticated users can view contact requests"
  ON contact_requests
  FOR SELECT
  TO authenticated
  USING (true);