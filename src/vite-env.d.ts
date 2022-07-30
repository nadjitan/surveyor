/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SRVYR_API: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
