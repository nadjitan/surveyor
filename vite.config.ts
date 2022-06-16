import { resolve } from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsConfigPaths from "vite-tsconfig-paths"
import dts from "vite-plugin-dts"

export default defineConfig(configEnv => ({
  plugins: [
    react(),
    tsConfigPaths(),
    dts({
      include: ["lib/index.ts"],
      beforeWriteFile: (filePath, content) => ({
        filePath: filePath.replace("/lib", ""),
        content,
      }),
    }),
  ],
  build: {
    lib: {
      entry: resolve("lib", "index.ts"),
      name: "Surveyor",
      fileName: format => `surveyor.${format}.js`,
    },
    rollupOptions: {
      external: ["react"],
    },
  },
}))
