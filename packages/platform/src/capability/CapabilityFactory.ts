/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Factory responsible for creating capability instances.
 */

import type { Capability } from "./Capability.js";
import type { CapabilityDescriptor } from "./CapabilityDescriptor.js";

export interface CapabilityFactory {
  /**
   * Creates a capability from its descriptor.
   */
  create(descriptor: CapabilityDescriptor): Capability;
}
