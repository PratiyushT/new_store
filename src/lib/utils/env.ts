function getEnv(name: string, fallback = ''): string {
  return typeof import.meta !== 'undefined' && import.meta.env?.[name]
    ? import.meta.env[name]
    : fallback;
}

// ─────────────────────────────────────────────────────────────
// 🌐 PUBLIC CLIENT-SAFE VARIABLES (VITE_ prefix required)
// ─────────────────────────────────────────────────────────────
export const MAPBOX_API_KEY = getEnv('VITE_MAPBOX_API_KEY');
export const SUPABASE_URL = getEnv('VITE_SUPABASE_URL');
export const SUPABASE_ANON_KEY = getEnv('VITE_SUPABASE_ANON_KEY');
export const STRIPE_PUBLIC_KEY = getEnv('VITE_STRIPE_PUBLIC_KEY');
export const SANITY_PROJECT_ID = getEnv('VITE_SANITY_PROJECT_ID');
export const SANITY_DATASET = getEnv('VITE_SANITY_DATASET');

// ─────────────────────────────────────────────────────────────
// 🔐 PRIVATE SERVER-ONLY VARIABLES (no VITE_ prefix)
// Only use these in server routes or endpoints
// ─────────────────────────────────────────────────────────────
export const PRIVATE_STRIPE_SECRET_KEY = getEnv('STRIPE_SECRET_KEY');
