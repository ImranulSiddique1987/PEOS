/**
 * PEOS Platform
 * Kernel Descriptor Contract
 *
 * Describes immutable metadata for a Platform Kernel.
 *
 * This contract contains descriptive information only and introduces
 * no runtime behavior.
 */

/**
 * Immutable metadata describing a Platform Kernel.
 */
export interface KernelDescriptor {
  /**
   * Unique kernel identifier.
   */
  readonly id: string;

  /**
   * Human-readable kernel name.
   */
  readonly name: string;

  /**
   * Kernel version.
   */
  readonly version: string;

  /**
   * Optional kernel description.
   */
  readonly description?: string;
}
