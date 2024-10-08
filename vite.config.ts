import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { pigment, PigmentOptions } from "@pigment-css/vite-plugin";
import { theme } from "./src/assets/theme";

const pigmentConfig: PigmentOptions = {
  theme,
  transformLibraries: ["@mui/base"],
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pigment(pigmentConfig)],
  build: {
    outDir: "dist", // default の設定と同じ
    lib: {
      entry: "src/index.ts",
      name: "bulbul",
      fileName: "index",
      formats: ["es", "umd"], // default の設定と同じ
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
