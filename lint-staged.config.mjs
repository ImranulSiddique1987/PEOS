/**
 * PEOS Monorepo
 * Shared lint-staged Configuration
 *
 * Runs quality checks only on staged files before commit.
 */

export default {
  "*.{js,mjs,cjs,ts,mts,cts,d.ts,jsx,tsx}": [
    "prettier --write",
    "eslint --fix",
  ],

  "*.{json,md,yml,yaml}": ["prettier --write"],
};
