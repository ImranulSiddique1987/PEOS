/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

/**
 * Defines the lifetime of a registered service.
 *
 * This contract describes lifecycle intent only.
 * It does not prescribe how a runtime manages service instances.
 *
 * Future Evolution (Deferred):
 * - Request lifetime
 * - Session lifetime
 * - Agent lifetime
 * - Workflow lifetime
 * - Custom lifetimes
 */
export enum ServiceLifetime {
  /**
   * A single shared instance for the lifetime of the provider.
   */
  Singleton = "singleton",

  /**
   * A new instance is created for each logical scope.
   */
  Scoped = "scoped",

  /**
   * A new instance is created every time the service is requested.
   */
  Transient = "transient",
}
