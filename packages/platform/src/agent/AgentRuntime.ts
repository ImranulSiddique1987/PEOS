import type { Agent } from "./Agent";
import { AgentRegistry } from "./AgentRegistry";
import { AgentResolver } from "./AgentResolver";

/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Agent Runtime
 * -----------------------------------------------------------------------------
 * Coordinates registration and resolution of Agent runtime instances.
 * =============================================================================
 */
export class AgentRuntime {
  private readonly registry: AgentRegistry;

  private readonly resolver: AgentResolver;

  constructor() {
    this.registry = new AgentRegistry();
    this.resolver = new AgentResolver(this.registry);
  }

  /**
   * Registers an agent.
   */
  register(agent: Agent): void {
    this.registry.register(agent);
  }

  /**
   * Resolves an agent by identifier.
   */
  resolve(id: string): Agent | undefined {
    return this.resolver.resolve(id);
  }

  /**
   * Returns true if the agent exists.
   */
  has(id: string): boolean {
    return this.resolver.exists(id);
  }

  /**
   * Returns all registered agents.
   */
  getAll(): readonly Agent[] {
    return this.resolver.getAll();
  }

  /**
   * Removes an agent.
   */
  unregister(id: string): boolean {
    return this.registry.unregister(id);
  }

  /**
   * Clears the runtime registry.
   */
  clear(): void {
    this.registry.clear();
  }
}
