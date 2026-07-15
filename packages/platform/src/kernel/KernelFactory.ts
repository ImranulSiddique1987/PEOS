/**
 * PEOS Platform
 * Kernel Factory Contract
 *
 * Defines the contract for creating Platform Kernel instances.
 *
 * This interface specifies creation semantics only and does not
 * prescribe any implementation details.
 */

import type { Kernel } from "./Kernel.js";
import type { KernelDescriptor } from "./KernelDescriptor.js";

/**
 * Factory contract for creating Platform Kernel instances.
 */
export interface KernelFactory {
  /**
   * Creates a Platform Kernel from the supplied descriptor.
   *
   * @param descriptor Immutable metadata describing the kernel.
   * @returns A Platform Kernel instance.
   */
  create(descriptor: KernelDescriptor): Kernel;
}
