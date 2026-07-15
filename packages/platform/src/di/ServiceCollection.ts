/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceDescriptor } from "./ServiceDescriptor.js";

/**
 * Represents a collection of service registrations.
 *
 * A service collection accepts service descriptors without prescribing
 * how they are stored or later consumed by a runtime.
 *
 * Responsibilities:
 * - Accept service registrations.
 *
 * Non-Responsibilities:
 * - Service resolution
 * - Service activation
 * - Service lifetime management
 * - Service storage implementation
 *
 * Future Evolution (Deferred):
 * - Bulk registration
 * - Conditional registration
 * - Replacement
 * - Removal
 * - Module registration
 * - Plugin registration
 */
export interface ServiceCollection {
  /**
   * Registers a service descriptor.
   *
   * @param descriptor The service descriptor to register.
   * @returns The current service collection.
   */
  add(descriptor: ServiceDescriptor): this;
}
