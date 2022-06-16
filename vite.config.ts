import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "lib"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "lib", "index.ts"),
      name: "Surveyor",
      formats: ["es", "cjs"],
      fileName: ext => `surveyor.${ext}.js`,
    },
    rollupOptions: {
      external: ["react"],
    },
    target: "esnext",
    sourcemap: true,
  },
})
