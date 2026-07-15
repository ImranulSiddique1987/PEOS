import type { Agent } from "./Agent";
import type { AgentDescriptor } from "./AgentDescriptor";

/**
 * Represents an agent provider contract.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentProvider {
  /**
   * Agent descriptor.
   */
  readonly descriptor: AgentDescriptor;

  /**
   * Returns an agent instance.
   */
  getAgent(): Agent;
}
