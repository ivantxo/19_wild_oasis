import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vfwzmmooxyjpqhpyfrvg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZmd3ptbW9veHlqcHFocHlmcnZnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1MDEzNjUsImV4cCI6MjA2MTA3NzM2NX0.3soZaWY_HuXQvNkBpJwKvaRMWJrDRvAKG7qFZnpkxZg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
