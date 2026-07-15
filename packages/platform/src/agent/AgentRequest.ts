import type { AgentContext } from "./AgentContext";
import type { AgentDescriptor } from "./AgentDescriptor";
import type { AgentMetadata } from "./AgentMetadata";

/**
 * Represents an agent request.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentRequest {
  /**
   * Unique request identifier.
   */
  readonly id: string;

  /**
   * Target agent.
   */
  readonly agent: AgentDescriptor;

  /**
   * Input payload.
   */
  readonly input: unknown;

  /**
   * Optional execution context.
   */
  readonly context?: AgentContext;

  /**
   * Optional metadata.
   */
  readonly metadata?: AgentMetadata;
}
