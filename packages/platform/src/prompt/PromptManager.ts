/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Prompt Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptManager.ts
 *
 * Description:
 *   High-level runtime service responsible for managing Prompt registration
 *   and resolution operations.
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
import { PromptRuntime } from "./PromptRuntime";

/**
 * High-level Prompt runtime manager.
 */
export class PromptManager {
  /**
   * Creates a new PromptManager.
   *
   * @param runtime Prompt runtime.
   */
  constructor(private readonly runtime: PromptRuntime = new PromptRuntime()) {}

  /**
   * Registers a Prompt.
   *
   * @param prompt Prompt contract.
   */
  register(prompt: Prompt): void {
    this.runtime.register(prompt);
  }

  /**
   * Resolves a Prompt by identifier.
   *
   * @param id Prompt identifier.
   * @returns Prompt if found; otherwise undefined.
   */
  resolve(id: string): Prompt | undefined {
    return this.runtime.resolve(id);
  }

  /**
   * Determines whether a Prompt exists.
   *
   * @param id Prompt identifier.
   */
  has(id: string): boolean {
    return this.runtime.has(id);
  }

  /**
   * Returns all registered Prompts.
   */
  getAll(): readonly Prompt[] {
    return this.runtime.getAll();
  }

  /**
   * Removes a Prompt.
   *
   * @param id Prompt identifier.
   */
  unregister(id: string): boolean {
    return this.runtime.unregister(id);
  }

  /**
   * Clears all registered Prompts.
   */
  clear(): void {
    this.runtime.clear();
  }

  /**
   * Returns the underlying runtime.
   */
  getRuntime(): PromptRuntime {
    return this.runtime;
  }
}
