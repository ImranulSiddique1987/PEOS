import type { AIProvider } from "./AIProvider";
import type { AIRuntime } from "./AIRuntime";

/**
 * Represents an AI runtime provider contract.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIRuntimeProvider {
  /**
   * Supported AI provider.
   */
  readonly provider: AIProvider;

  /**
   * Creates or returns an AI runtime.
   */
  getRuntime(): AIRuntime;
}
