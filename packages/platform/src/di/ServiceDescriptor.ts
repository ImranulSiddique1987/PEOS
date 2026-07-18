/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type {
  ServiceConstructor,
  ServiceIdentifier,
} from "./ServiceIdentifier.js";
import { ServiceLifetime } from "./ServiceLifetime.js";
import type { ServiceProvider } from "./ServiceProvider.js";

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
 * - Describe optional runtime activation metadata.
 *
 * Non-Responsibilities:
 * - Service registration
 * - Service resolution
 * - Service activation
 * - Service instantiation
 *
 * Future Evolution (Deferred):
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

  /**
   * Optional implementation type used by the runtime
   * to construct the service.
   */
  readonly implementation?: ServiceConstructor<T>;

  /**
   * Optional factory used to create the service.
   * When specified, it takes precedence over
   * implementation construction.
   */
  readonly factory?: (provider: ServiceProvider) => T;

  /**
   * Optional pre-created instance.
   * Primarily intended for singleton registrations.
   */
  readonly instance?: T;
}
