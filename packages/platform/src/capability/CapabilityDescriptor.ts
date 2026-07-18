/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Describes a platform capability.
 */

export interface CapabilityDescriptor {
  /**
   * Capability identifier.
   */
  readonly id: string;

  /**
   * Capability name.
   */
  readonly name: string;

  /**
   * Capability version.
   */
  readonly version: string;

  /**
   * Optional description.
   */
  readonly description?: string;
}
