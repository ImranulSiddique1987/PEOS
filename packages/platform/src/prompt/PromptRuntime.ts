/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Prompt Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptRuntime.ts
 *
 * Description:
 *   Enterprise runtime responsible for managing Prompt registration,
 *   resolution and runtime access.
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
import { PromptRegistry } from "./PromptRegistry";
import { PromptResolver } from "./PromptResolver";

/**
 * Enterprise Prompt Runtime.
 */
export class PromptRuntime {
  /**
   * Underlying prompt registry.
   */
  readonly registry: PromptRegistry;

  /**
   * Prompt resolver.
   */
  readonly resolver: PromptResolver;

  /**
   * Creates a new PromptRuntime.
   *
   * @param registry Optional registry instance.
   */
  constructor(registry?: PromptRegistry) {
    this.registry = registry ?? new PromptRegistry();
    this.resolver = new PromptResolver(this.registry);
  }

  /**
   * Registers a Prompt.
   *
   * @param prompt Prompt contract.
   */
  register(prompt: Prompt): void {
    this.registry.register(prompt);
  }

  /**
   * Resolves a Prompt.
   *
   * @param id Prompt identifier.
   * @returns Prompt if found; otherwise undefined.
   */
  resolve(id: string): Prompt | undefined {
    return this.resolver.resolve(id);
  }

  /**
   * Determines whether a Prompt exists.
   *
   * @param id Prompt identifier.
   */
  has(id: string): boolean {
    return this.registry.has(id);
  }

  /**
   * Returns all registered Prompts.
   */
  getAll(): readonly Prompt[] {
    return this.registry.getAll();
  }

  /**
   * Removes a Prompt.
   *
   * @param id Prompt identifier.
   */
  unregister(id: string): boolean {
    return this.registry.unregister(id);
  }

  /**
   * Clears the runtime.
   */
  clear(): void {
    this.registry.clear();
  }
}
