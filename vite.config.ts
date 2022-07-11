import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

// https://vitejs.dev/config/
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
      external: ["react", "react-dom"],
    },
    target: "esnext",
    sourcemap: true,
  },
})
