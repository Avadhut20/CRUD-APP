// Import the supabase client
import { createClient } from '@supabase/supabase-js';

// Replace 'your-api-url' and 'your-api-key' with your Supabase project's API URL and Service Role Key
const supabase = createClient('https://mitodsysbsficqvaivpx.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1pdG9kc3lzYnNmaWNxdmFpdnB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NDc5MDYsImV4cCI6MjAyMDAyMzkwNn0.CBQME9tNVMatQBAcbALBQZ3P7xzXLWEvKNR7F1ivzMo');

export default supabase;
