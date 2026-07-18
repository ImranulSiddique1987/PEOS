/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ActivationContext } from "./ActivationContext.js";

/**
 * Defines the contract for runtime service activation.
 *
 * A service activator is responsible for creating service
 * instances from an activation context. Different activator
 * implementations may support constructor activation, factory
 * activation, proxy generation, plugin loading, workflow
 * execution, or other runtime activation strategies.
 *
 * Responsibilities:
 * - Create service instances.
 * - Consume an activation context.
 *
 * Non-Responsibilities:
 * - Service registration
 * - Service resolution
 * - Lifetime management
 * - Dependency graph construction
 */
export interface ServiceActivator {
  /**
   * Creates a service instance.
   *
   * @param context Runtime activation context.
   * @returns Activated service instance.
   */
  activate<T>(context: ActivationContext<T>): T;
}
