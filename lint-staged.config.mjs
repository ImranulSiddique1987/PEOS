/**
 * PEOS Monorepo
 * Shared lint-staged Configuration
 *
 * Runs quality checks only on staged files before commit.
 */

export default {
  "*.{js,mjs,cjs,ts,mts,cts,d.ts,jsx,tsx}": [
    "pnpm exec prettier --write",
    "node --max-old-space-size=4096 ./node_modules/eslint/bin/eslint.js --fix",
  ],

  "*.{json,md,yml,yaml}": ["pnpm exec prettier --write"],
};
