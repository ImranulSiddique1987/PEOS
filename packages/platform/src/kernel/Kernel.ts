/**
 * PEOS Platform
 * Kernel Contract
 *
 * Defines the canonical abstraction for a Platform Kernel.
 *
 * A Kernel represents the composed platform boundary that coordinates
 * platform capabilities through contracts only.
 *
 * This interface intentionally contains no runtime behavior or
 * implementation details. Concrete implementations are introduced
 * in future milestones.
 */

import type { KernelDescriptor } from "./KernelDescriptor.js";

/**
 * Represents a composed Platform Kernel.
 */
export interface Kernel {
  /**
   * Immutable metadata describing this kernel.
   */
  readonly descriptor: KernelDescriptor;
}
