import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface ContactRequest {
  name: string;
  company: string;
  phone: string;
  email: string;
  description: string;
  preferred_period?: string;
}

export async function submitContactRequest(data: ContactRequest) {
  const { error } = await supabase
    .from('contact_requests')
    .insert([data]);

  if (error) throw error;
}
