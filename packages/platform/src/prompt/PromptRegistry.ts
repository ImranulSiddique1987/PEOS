/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Prompt Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptRegistry.ts
 *
 * Description:
 *   Enterprise runtime registry responsible for storing immutable Prompt
 *   contract instances.
 *
 * Design Principles:
 *   - Runtime implementation
 *   - Contract compliant
 *   - Provider neutral
 *   - Framework agnostic
 *   - Service Container compatible
 * =============================================================================
 */

import type { Prompt } from "./Prompt";

/**
 * Runtime registry for Prompt definitions.
 */
export class PromptRegistry {
  private readonly prompts = new Map<string, Prompt>();

  /**
   * Registers a Prompt.
   *
   * @param prompt Prompt contract.
   */
  register(prompt: Prompt): void {
    this.prompts.set(prompt.id, prompt);
  }

  /**
   * Determines whether a Prompt exists.
   *
   * @param id Prompt identifier.
   */
  has(id: string): boolean {
    return this.prompts.has(id);
  }

  /**
   * Retrieves a Prompt.
   *
   * @param id Prompt identifier.
   */
  get(id: string): Prompt | undefined {
    return this.prompts.get(id);
  }

  /**
   * Returns all registered Prompts.
   */
  getAll(): readonly Prompt[] {
    return [...this.prompts.values()];
  }

  /**
   * Removes a Prompt.
   *
   * @param id Prompt identifier.
   */
  unregister(id: string): boolean {
    return this.prompts.delete(id);
  }

  /**
   * Clears the registry.
   */
  clear(): void {
    this.prompts.clear();
  }

  /**
   * Number of registered prompts.
   */
  get size(): number {
    return this.prompts.size;
  }
}
