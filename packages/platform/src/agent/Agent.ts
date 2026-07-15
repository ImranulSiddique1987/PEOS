import type { AgentDescriptor } from "./AgentDescriptor";
import type { AgentMetadata } from "./AgentMetadata";
import type { AgentRequest } from "./AgentRequest";
import type { AgentResponse } from "./AgentResponse";

/**
 * Represents an executable agent contract.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface Agent {
  /**
   * Unique agent identifier.
   */
  readonly id: string;

  /**
   * Agent descriptor.
   */
  readonly descriptor: AgentDescriptor;

  /**
   * Optional metadata.
   */
  readonly metadata?: AgentMetadata;

  /**
   * Executes an agent request.
   */
  execute(request: AgentRequest): Promise<AgentResponse>;
}
