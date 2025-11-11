import { loadEnv, defineViteConfig } from "electron-vite"
import { resolve } from "node:path"

/**
 * @type {import('electron-vite').UserConfig}
 */
const config = {
  main: {
    build: {
      outDir: "out/main",
      lib: {
        entry: "src/main.mjs",
      },
      reportCompressedSize: false,
    },
    publicDir: "src/public",
  },
  preload: {
    build: {
      outDir: "out/preload",
      lib: {
        entry: "src/preload.mjs",
      },
      reportCompressedSize: false,
    },
    publicDir: "src/public",
  },
  renderer: {
    root: ".",
    build: {
      outDir: "out/renderer",
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/views/index.html"),
        },
      },
    },
  },
}

export default config
