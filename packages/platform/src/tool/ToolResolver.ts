/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Tool Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolResolver.ts
 *
 * Description:
 *   Enterprise runtime resolver responsible for resolving Tool contracts
 *   from the ToolRegistry.
 *
 * Design Principles:
 *   - Runtime implementation
 *   - Contract compliant
 *   - Provider neutral
 *   - Framework agnostic
 *   - Service Container compatible
 * =============================================================================
 */

import type { Tool } from "./Tool";
import { ToolRegistry } from "./ToolRegistry";

/**
 * Runtime resolver for Tool definitions.
 */
export class ToolResolver {
  /**
   * Creates a new ToolResolver.
   *
   * @param registry Tool registry.
   */
  constructor(private readonly registry: ToolRegistry) {}

  /**
   * Resolves a Tool by identifier.
   *
   * @param id Tool identifier.
   * @returns Tool if found; otherwise undefined.
   */
  resolve(id: string): Tool | undefined {
    return this.registry.get(id);
  }

  /**
   * Determines whether a Tool exists.
   *
   * @param id Tool identifier.
   */
  exists(id: string): boolean {
    return this.registry.has(id);
  }

  /**
   * Returns all registered Tools.
   */
  getAll(): readonly Tool[] {
    return this.registry.getAll();
  }
}
