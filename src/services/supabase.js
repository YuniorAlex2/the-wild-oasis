import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://yegimdsttuxntppxkbmp.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InllZ2ltZHN0dHV4bnRwcHhrYm1wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk0MDY0OTcsImV4cCI6MjAyNDk4MjQ5N30.4NMR7Gsz5q10ThBjV3jWCaQHtsrO2_csbXZ0Czb7kxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
