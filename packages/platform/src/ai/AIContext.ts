import type { AIMetadata } from "./AIMetadata";

/**
 * Represents contextual information supplied to an AI runtime.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIContext {
  /**
   * Unique context identifier.
   */
  readonly id: string;

  /**
   * Context variables.
   */
  readonly variables?: Readonly<Record<string, unknown>>;

  /**
   * Optional metadata.
   */
  readonly metadata?: AIMetadata;
}
