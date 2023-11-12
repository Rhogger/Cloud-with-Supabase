import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tfuefxkmrjkzebejzxpx.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmdWVmeGttcmpremViZWp6eHB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk3NTQyMDUsImV4cCI6MjAxNTMzMDIwNX0.tqeJPs2p2PvRIJblA-x7L5laKKYK4N4wlvv9VhO5Lr4'
);

export default supabase;
