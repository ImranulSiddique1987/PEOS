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
 * - Preserve runtime activation context.
 * - Surface deterministic activation failures.
 *
 * Future Evolution:
 * - Constructor parameter injection
 * - Optional parameters
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
      if (error instanceof ActivationException) {
        throw error;
      }

      throw new ActivationException(
        [
          `Failed to activate service: ${String(context.identifier)}`,
          `Resolution Path: ${context.resolutionStack
            .map((identifier) => String(identifier))
            .join(" -> ")}`,
        ].join("\n"),
        error,
      );
    }
  }
}
