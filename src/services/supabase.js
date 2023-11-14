import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://xzroiakvtnarquxwlrtv.supabase.co";

const supabaseKey =
  /* cspell: disable-next-line */
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6cm9pYWt2dG5hcnF1eHdscnR2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5NjMxODgsImV4cCI6MjAxNTUzOTE4OH0.E0wW_IspZt1wdOX9Vfgxw_DOsNQWe9AXKlYsoBBQXtg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
