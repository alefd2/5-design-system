import { defineConfig } from "tsup"

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  splitting: false,
  clean: true,
  minify: false,
  external: ["react", "react-dom"],
})
