import type { Agent } from "./Agent";
import { AgentRegistry } from "./AgentRegistry";

/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Agent Runtime Resolver
 * -----------------------------------------------------------------------------
 * Resolves Agent runtime instances from the registry.
 * =============================================================================
 */
export class AgentResolver {
  constructor(private readonly registry: AgentRegistry) {}

  /**
   * Resolves an agent by identifier.
   */
  resolve(id: string): Agent | undefined {
    return this.registry.get(id);
  }

  /**
   * Returns true if the agent exists.
   */
  exists(id: string): boolean {
    return this.registry.has(id);
  }

  /**
   * Returns all registered agents.
   */
  getAll(): readonly Agent[] {
    return this.registry.getAll();
  }
}
