/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ActivationContext } from "./ActivationContext.js";
import { ConstructorActivator } from "./ConstructorActivator.js";

/**
 * Runtime instance factory.
 *
 * Responsibilities:
 * - Centralize runtime instance creation.
 * - Delegate constructor activation.
 * - Provide a single runtime creation entry point.
 *
 * Non-Responsibilities:
 * - Dependency resolution.
 * - Lifetime management.
 * - Service registration.
 * - Circular dependency detection.
 *
 * Future Evolution:
 * - Metadata-driven activation.
 * - Constructor parameter injection.
 * - Activation pipeline.
 * - Interceptors.
 * - Proxy generation.
 * - AOT activation.
 */
export class RuntimeInstanceFactory {
  /**
   * Runtime constructor activator.
   */
  private readonly activator = new ConstructorActivator();

  /**
   * Creates a runtime service instance.
   */
  public create<T>(context: ActivationContext<T>): T {
    return this.activator.activate(context);
  }
}
