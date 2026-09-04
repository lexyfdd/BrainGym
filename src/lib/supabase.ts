import { createClient, SupabaseClient } from '@supabase/supabase-js';

let supabaseInstance: SupabaseClient | null = null;

export const initSupabase = (url: string, key: string) => {
  if (url && key) {
    try {
      supabaseInstance = createClient(url, key);
      localStorage.setItem('supabaseUrl', url);
      localStorage.setItem('supabaseKey', key);
      return true;
    } catch (e) {
      console.error("Invalid Supabase URL or Key");
      return false;
    }
  }
  return false;
};

// Try init from env or localStorage
const envUrl = import.meta.env.VITE_SUPABASE_URL || localStorage.getItem('supabaseUrl');
const envKey = import.meta.env.VITE_SUPABASE_ANON_KEY || localStorage.getItem('supabaseKey');

if (envUrl && envKey) {
  try {
    supabaseInstance = createClient(envUrl, envKey);
  } catch(e) {
    console.error("Failed to initialize Supabase from env/local");
  }
}

export const supabase = supabaseInstance;
export const isSupabaseConfigured = () => supabaseInstance !== null;
export const clearSupabaseConfig = () => {
  localStorage.removeItem('supabaseUrl');
  localStorage.removeItem('supabaseKey');
  window.location.reload();
};
