import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginFaviconsInject from "vite-plugin-favicons-inject";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), vitePluginFaviconsInject("./src/assets/home/favicon.ico")],
	base: "https://github.com/koloru/koloru.github.io",
});
