/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceIdentifier } from "./ServiceIdentifier.js";

/**
 * Represents a provider capable of resolving services.
 *
 * A service provider resolves services without prescribing how
 * services are stored, created, cached, or managed.
 *
 * Responsibilities:
 * - Resolve registered services.
 *
 * Non-Responsibilities:
 * - Service registration
 * - Service activation
 * - Service lifetime management
 * - Scope management
 * - Container implementation
 *
 * Future Evolution (Deferred):
 * - Enumerable resolution
 * - Scoped providers
 * - Keyed resolution
 * - Named resolution
 * - Async resolution
 * - Diagnostics
 */
export interface ServiceProvider {
  /**
   * Resolves a required service.
   *
   * @param identifier The service identifier.
   * @returns The resolved service.
   */
  get<T>(identifier: ServiceIdentifier<T>): T;

  /**
   * Attempts to resolve an optional service.
   *
   * @param identifier The service identifier.
   * @returns The resolved service, or undefined if unavailable.
   */
  tryGet<T>(identifier: ServiceIdentifier<T>): T | undefined;
}
