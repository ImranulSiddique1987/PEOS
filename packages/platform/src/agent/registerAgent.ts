import type { Agent } from "./Agent";
import { AgentRuntime } from "./AgentRuntime";

/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Agent Registration Helper
 * -----------------------------------------------------------------------------
 * Registers an Agent with the provided Agent Runtime.
 * =============================================================================
 */

/**
 * Registers an agent with the runtime.
 */
export function registerAgent(runtime: AgentRuntime, agent: Agent): void {
  runtime.register(agent);
}
