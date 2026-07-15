import type { Agent } from "./Agent";
import type { AgentDescriptor } from "./AgentDescriptor";

/**
 * Represents a factory for creating agents.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AgentFactory {
  /**
   * Creates an agent from its descriptor.
   */
  create(descriptor: AgentDescriptor): Agent;
}
