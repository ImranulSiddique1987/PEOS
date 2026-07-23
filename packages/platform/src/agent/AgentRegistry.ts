import type { Agent } from "./Agent";

/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Agent Runtime Registry
 * -----------------------------------------------------------------------------
 * Stores and manages registered Agent runtime instances.
 * =============================================================================
 */
export class AgentRegistry {
  private readonly agents = new Map<string, Agent>();

  /**
   * Registers an agent.
   *
   * @throws Error if an agent with the same identifier already exists.
   */
  register(agent: Agent): void {
    if (this.agents.has(agent.id)) {
      throw new Error(`Agent '${agent.id}' is already registered.`);
    }

    this.agents.set(agent.id, agent);
  }

  /**
   * Returns true if the agent exists.
   */
  has(id: string): boolean {
    return this.agents.has(id);
  }

  /**
   * Returns an agent by identifier.
   */
  get(id: string): Agent | undefined {
    return this.agents.get(id);
  }

  /**
   * Returns all registered agents.
   */
  getAll(): readonly Agent[] {
    return [...this.agents.values()];
  }

  /**
   * Removes an agent.
   *
   * @returns true if removed.
   */
  unregister(id: string): boolean {
    return this.agents.delete(id);
  }

  /**
   * Clears the registry.
   */
  clear(): void {
    this.agents.clear();
  }

  /**
   * Number of registered agents.
   */
  get size(): number {
    return this.agents.size;
  }
}
