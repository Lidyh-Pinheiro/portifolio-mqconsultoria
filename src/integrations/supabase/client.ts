// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://zcxyhujjvxbibqvemwmd.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpjeHlodWpqdnhiaWJxdmVtd21kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM3OTYxOTAsImV4cCI6MjA1OTM3MjE5MH0.reYFlTjZQn2ZeFzOmIU_jhkfuptMDsQ1-S8Ff57D20g";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);