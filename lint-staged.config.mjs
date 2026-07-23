export default {
  "*.{js,mjs,cjs,ts,mts,cts,d.ts,jsx,tsx}": [
    "prettier --write",
    "eslint --fix",
  ],

  "*.{json,md,yml,yaml}": ["prettier --write"],
};
