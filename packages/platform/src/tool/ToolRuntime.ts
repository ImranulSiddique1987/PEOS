/**
 * =============================================================================
 * PEOS — Product Engineering Operating System
 * -----------------------------------------------------------------------------
 * Tool Execution Runtime Foundation
 * -----------------------------------------------------------------------------
 * File:
 *   ToolRuntime.ts
 *
 * Description:
 *   Enterprise runtime responsible for managing Tool registration,
 *   resolution, and runtime access.
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
import { ToolResolver } from "./ToolResolver";

/**
 * Enterprise Tool Runtime.
 */
export class ToolRuntime {
  /**
   * Underlying tool registry.
   */
  readonly registry: ToolRegistry;

  /**
   * Tool resolver.
   */
  readonly resolver: ToolResolver;

  /**
   * Creates a new ToolRuntime.
   *
   * @param registry Optional registry instance.
   */
  constructor(registry?: ToolRegistry) {
    this.registry = registry ?? new ToolRegistry();
    this.resolver = new ToolResolver(this.registry);
  }

  /**
   * Registers a Tool.
   *
   * @param tool Tool contract.
   */
  register(tool: Tool): void {
    this.registry.register(tool);
  }

  /**
   * Resolves a Tool.
   *
   * @param id Tool identifier.
   * @returns Tool if found; otherwise undefined.
   */
  resolve(id: string): Tool | undefined {
    return this.resolver.resolve(id);
  }

  /**
   * Determines whether a Tool exists.
   *
   * @param id Tool identifier.
   */
  has(id: string): boolean {
    return this.registry.has(id);
  }

  /**
   * Returns all registered Tools.
   */
  getAll(): readonly Tool[] {
    return this.registry.getAll();
  }

  /**
   * Removes a Tool.
   *
   * @param id Tool identifier.
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
