/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceDescriptor } from "./ServiceDescriptor.js";
import type { ServiceIdentifier } from "./ServiceIdentifier.js";
import type { ServiceProvider } from "./ServiceProvider.js";

/**
 * Represents the runtime context for a service activation.
 *
 * Responsibilities:
 * - Provide the requested service identifier.
 * - Provide the resolved service descriptor.
 * - Provide access to the service provider.
 *
 * Non-Responsibilities:
 * - Service resolution
 * - Object construction
 * - Lifetime management
 * - Circular dependency detection
 */
export interface ActivationContext<T = unknown> {
  /**
   * Requested service identifier.
   */
  readonly identifier: ServiceIdentifier<T>;

  /**
   * Resolved service descriptor.
   */
  readonly descriptor: ServiceDescriptor<T>;

  /**
   * Runtime service provider.
   */
  readonly provider: ServiceProvider;
}
