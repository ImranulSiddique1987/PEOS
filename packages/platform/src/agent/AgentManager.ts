import type { Agent } from "./Agent";
import { AgentRuntime } from "./AgentRuntime";

/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Agent Manager
 * -----------------------------------------------------------------------------
 * High-level facade for interacting with the Agent Runtime.
 * =============================================================================
 */
export class AgentManager {
  private readonly runtime: AgentRuntime;

  constructor(runtime: AgentRuntime = new AgentRuntime()) {
    this.runtime = runtime;
  }

  /**
   * Registers an agent.
   */
  register(agent: Agent): void {
    this.runtime.register(agent);
  }

  /**
   * Resolves an agent by identifier.
   */
  resolve(id: string): Agent | undefined {
    return this.runtime.resolve(id);
  }

  /**
   * Returns true if the agent exists.
   */
  has(id: string): boolean {
    return this.runtime.has(id);
  }

  /**
   * Returns all registered agents.
   */
  getAll(): readonly Agent[] {
    return this.runtime.getAll();
  }

  /**
   * Removes an agent.
   */
  unregister(id: string): boolean {
    return this.runtime.unregister(id);
  }

  /**
   * Clears all registered agents.
   */
  clear(): void {
    this.runtime.clear();
  }

  /**
   * Returns the underlying runtime.
   */
  getRuntime(): AgentRuntime {
    return this.runtime;
  }
}
