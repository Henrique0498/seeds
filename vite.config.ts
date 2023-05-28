import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
