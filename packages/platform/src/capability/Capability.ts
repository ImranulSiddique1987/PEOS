/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Defines the core abstraction representing a platform capability.
 */

import type { CapabilityContext } from "./CapabilityContext.js";
import type { CapabilityDescriptor } from "./CapabilityDescriptor.js";
import type { CapabilityMetadata } from "./CapabilityMetadata.js";

export interface Capability {
  /**
   * Unique capability identifier.
   */
  readonly id: string;

  /**
   * Human-readable capability name.
   */
  readonly name: string;

  /**
   * Capability descriptor.
   */
  readonly descriptor: CapabilityDescriptor;

  /**
   * Capability metadata.
   */
  readonly metadata: CapabilityMetadata;

  /**
   * Initializes the capability.
   */
  initialize(context: CapabilityContext): Promise<void>;

  /**
   * Shuts down the capability.
   */
  dispose(): Promise<void>;
}
