/**
 * Shared Prettier configuration for the PEOS monorepo.
 *
 * This is the default configuration used by all packages
 * unless a specialized React or Node configuration is required.
 */

module.exports = {
  semi: true,
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: "always",
  endOfLine: "lf",
};
