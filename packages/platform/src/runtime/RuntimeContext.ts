import type { Runtime } from "./Runtime.js";

/**
 * Shared execution context for a Platform Runtime.
 *
 * RuntimeContext provides immutable metadata shared across runtime
 * implementations while remaining independent from lifecycle,
 * dependency injection, scheduling, and orchestration concerns.
 */
export interface RuntimeContext {
  /**
   * Active runtime.
   */
  readonly runtime: Runtime;

  /**
   * Context identifier.
   */
  readonly id: string;

  /**
   * Context creation time.
   */
  readonly createdAt: Date;

  /**
   * Immutable runtime variables.
   */
  readonly variables: Readonly<Record<string, unknown>>;
}
