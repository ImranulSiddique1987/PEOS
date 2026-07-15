import type { AIProvider } from "./AIProvider";
import type { AIRuntime } from "./AIRuntime";

/**
 * Represents a factory for AI runtime contracts.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIRuntimeFactory {
  /**
   * Creates an AI runtime for the specified provider.
   */
  create(provider: AIProvider): AIRuntime;
}
