/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FIREBASE_API_KEY: string;
  readonly VITE_FIREBASE_AUTH_DOMAIN: string;
  // Tambahkan variabel lingkungan lain yang Anda gunakan
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
