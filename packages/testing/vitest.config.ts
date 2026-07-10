import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.{test,spec}.ts"],

    exclude: ["**/node_modules/**", "**/dist/**", "**/.turbo/**"],

    coverage: {
      provider: "v8",
      reporter: ["text", "html", "lcov"],
    },
  },
});
