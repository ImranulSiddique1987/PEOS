/**
 * PEOS Platform
 *
 * Shared platform contracts for the Product Engineering Operating System.
 *
 * This package defines platform abstractions only.
 * Runtime implementations are introduced in future milestones.
 */

export * from "./contracts";
export * from "./environment";
export * from "./lifecycle";
export * from "./metadata";
export * from "./configuration";
export * as configuration from "./configuration";
export * from "./logging";
export * as logging from "./logging";
export * from "./events";
export * as events from "./events";
export * from "./di/index.js";
export * as di from "./di/index.js";
export * from "./plugins/index.js";
export * as plugins from "./plugins/index.js";
export * from "./services/index.js";
export * from "./context/index.js";
export * from "./runtime/index.js";
export * as runtime from "./runtime/index.js";
export * from "./kernel/index.js";
export * as kernel from "./kernel/index.js";
export * from "./workflow/index.js";
export * from "./ai";
export * from "./agent";
export * from "./memory";
