/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ActivationContext } from "./ActivationContext.js";
import { ActivationException } from "./ActivationException.js";
import type { ServiceActivator } from "./ServiceActivator.js";

/**
 * Default constructor-based service activator.
 *
 * Responsibilities:
 * - Activate concrete implementations.
 * - Support parameterless constructors.
 *
 * Future Evolution:
 * - Constructor injection
 * - Optional parameters
 * - Circular dependency detection
 * - Activation pipeline
 * - Interceptors
 */
export class ConstructorActivator implements ServiceActivator {
  /**
   * Activates a service implementation.
   */
  public activate<T>(context: ActivationContext<T>): T {
    const implementation = context.descriptor.implementation;

    if (!implementation) {
      throw new ActivationException(
        `No implementation registered for service: ${String(
          context.identifier,
        )}`,
      );
    }

    try {
      const Constructor = implementation as unknown as new () => T;

      return new Constructor();
    } catch (error) {
      throw new ActivationException(
        `Failed to activate service: ${String(context.identifier)}`,
        error,
      );
    }
  }
}
