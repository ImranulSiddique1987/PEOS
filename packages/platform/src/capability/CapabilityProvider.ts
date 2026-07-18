/**
 * PEOS Platform
 * Shared Platform Capability Contracts Foundation
 *
 * Defines a provider responsible for resolving platform capabilities.
 */

import type { Capability } from "./Capability.js";

export interface CapabilityProvider {
  /**
   * Returns all registered capabilities.
   */
  getCapabilities(): readonly Capability[];

  /**
   * Returns a capability by identifier.
   */
  getCapability(id: string): Capability | undefined;
}
