/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_SUPABASE_URL: string;
  readonly PUBLIC_SUPABASE_ANON_KEY: string;
  readonly SUPABASE_SERVICE_ROLE_KEY: string;
  readonly PUBLIC_SITE_URL: string;
  readonly PUBLIC_SITE_NAME: string;
  readonly PUBLIC_GA_MEASUREMENT_ID: string;
  readonly API_BASE_URL: string;
  readonly ENABLE_ANALYTICS: string;
  readonly ENABLE_SEARCH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
