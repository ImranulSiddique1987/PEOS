/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceIdentifier } from "./ServiceIdentifier.js";
import { ServiceLifetime } from "./ServiceLifetime.js";

/**
 * Describes a registered service.
 *
 * A service descriptor provides the metadata required to identify
 * and characterize a service registration without prescribing how
 * the service is created, stored, or resolved.
 *
 * Responsibilities:
 * - Describe the service identity.
 * - Describe the intended service lifetime.
 *
 * Non-Responsibilities:
 * - Service registration
 * - Service resolution
 * - Service activation
 * - Service instantiation
 * * Future Evolution (Deferred):
 * - Service factories
 * - Implementation identifiers
 * - Service metadata
 * - Service tags
 * - Named registrations
 * - Keyed registrations
 */
export interface ServiceDescriptor<T = unknown> {
  /**
   * Uniquely identifies the registered service.
   */
  readonly identifier: ServiceIdentifier<T>;

  /**
   * Defines the intended lifetime of the service.
   */
  readonly lifetime: ServiceLifetime;
}
