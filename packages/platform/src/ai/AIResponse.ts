import type { AIMetadata } from "./AIMetadata";

/**
 * Represents an AI runtime response.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIResponse {
  /**
   * Unique response identifier.
   */
  readonly id: string;

  /**
   * Response payload.
   */
  readonly output: unknown;

  /**
   * Optional response metadata.
   */
  readonly metadata?: AIMetadata;
}
