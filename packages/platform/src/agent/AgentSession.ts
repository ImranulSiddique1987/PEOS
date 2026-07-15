import type { AgentContext } from "./AgentContext";
import type { AgentMetadata } from "./AgentMetadata";

/**
 * Represents an agent session.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentSession {
  /**
   * Unique session identifier.
   */
  readonly id: string;

  /**
   * Session context.
   */
  readonly context?: AgentContext;

  /**
   * Optional metadata.
   */
  readonly metadata?: AgentMetadata;
}
