/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Measurement ID do GA4 (G-XXXXXXXXXX). Vazio desliga o analytics. */
  readonly VITE_GA_ID?: string;
}
