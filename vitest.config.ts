import react from "@vitejs/plugin-react";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	resolve: { alias: { "@": fileURLToPath(new URL("./src", import.meta.url)) } },
	test: {
		environment: "happy-dom",
		globals: true, // lets Testing Library auto-clean between tests
		setupFiles: ["./vitest.setup.ts"]
	}
});
