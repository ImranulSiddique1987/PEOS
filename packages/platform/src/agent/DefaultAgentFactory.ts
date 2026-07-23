import type { Agent } from "./Agent";
import type { AgentDescriptor } from "./AgentDescriptor";
import type { AgentFactory } from "./AgentFactory";
import type { AgentRequest } from "./AgentRequest";
import type { AgentResponse } from "./AgentResponse";

/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Default Agent Factory
 * -----------------------------------------------------------------------------
 * Default runtime implementation for creating immutable Agent instances.
 * =============================================================================
 */
export class DefaultAgentFactory implements AgentFactory {
  /**
   * Creates an immutable Agent instance from its descriptor.
   */
  create(descriptor: AgentDescriptor): Agent {
    return Object.freeze({
      id: descriptor.id,
      descriptor,
      metadata: descriptor.metadata,

      async execute(request: AgentRequest): Promise<AgentResponse> {
        return {
          id: request.id,
          output: request.input,
          metadata: request.metadata,
        };
      },
    });
  }
}
