import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { resolve } from "path"

const root = resolve(__dirname, "src")

// https://vitejs.dev/config/
export default defineConfig({
  root,
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
      input: {
        main: resolve(root, "index.html"),
        client: resolve(root, "client", "index.html"),
      },
    },
    target: "esnext",
    sourcemap: true,
  },
})
