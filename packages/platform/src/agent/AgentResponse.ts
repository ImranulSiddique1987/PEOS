import type { AgentMetadata } from "./AgentMetadata";

/**
 * Represents an agent response.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentResponse {
  /**
   * Unique response identifier.
   */
  readonly id: string;

  /**
   * Response payload.
   */
  readonly output: unknown;

  /**
   * Optional metadata.
   */
  readonly metadata?: AgentMetadata;
}
