/**
 * PEOS Platform
 * Kernel Provider Contract
 *
 * Defines the contract for resolving Platform Kernel instances.
 *
 * A provider is responsible only for exposing an existing Platform
 * Kernel abstraction. It does not define creation, lifecycle, or
 * execution semantics.
 */

import type { Kernel } from "./Kernel.js";

/**
 * Provider contract for resolving Platform Kernel instances.
 */
export interface KernelProvider {
  /**
   * Resolves the current Platform Kernel.
   *
   * @returns A Platform Kernel instance.
   */
  getKernel(): Kernel;
}
