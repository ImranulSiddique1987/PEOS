import type { AgentMetadata } from "./AgentMetadata";

/**
 * Represents contextual information supplied to an agent.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentContext {
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
  readonly metadata?: AgentMetadata;
}
