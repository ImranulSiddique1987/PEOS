import type { AIContext } from "./AIContext";
import type { AIMetadata } from "./AIMetadata";

/**
 * Represents an AI runtime session.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AISession {
  /**
   * Unique session identifier.
   */
  readonly id: string;

  /**
   * Session context.
   */
  readonly context?: AIContext;

  /**
   * Optional metadata.
   */
  readonly metadata?: AIMetadata;
}
