/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Prompt Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   PromptResolver.ts
 *
 * Description:
 *   Enterprise runtime resolver responsible for resolving Prompt contracts
 *   from the PromptRegistry.
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

/**
 * Runtime resolver for Prompt definitions.
 */
export class PromptResolver {
  /**
   * Creates a new PromptResolver.
   *
   * @param registry Prompt registry.
   */
  constructor(private readonly registry: PromptRegistry) {}

  /**
   * Resolves a Prompt by identifier.
   *
   * @param id Prompt identifier.
   * @returns Prompt if found; otherwise undefined.
   */
  resolve(id: string): Prompt | undefined {
    return this.registry.get(id);
  }

  /**
   * Determines whether a Prompt exists.
   *
   * @param id Prompt identifier.
   */
  exists(id: string): boolean {
    return this.registry.has(id);
  }

  /**
   * Returns all registered Prompts.
   */
  getAll(): readonly Prompt[] {
    return this.registry.getAll();
  }
}
