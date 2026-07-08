/**
 * Shared Prettier configuration for React applications.
 */

const baseConfig = require("./index.cjs");

module.exports = {
  ...baseConfig,
  jsxSingleQuote: false,
};
