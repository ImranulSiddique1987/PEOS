/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ActivationContext } from "./ActivationContext.js";
import { ActivationException } from "./ActivationException.js";
import { ConstructorSelector } from "./ConstructorSelector.js";
import type { ServiceActivator } from "./ServiceActivator.js";

/**
 * Default constructor-based service activator.
 *
 * Responsibilities:
 * - Delegate constructor selection.
 * - Activate selected constructor.
 * - Preserve runtime activation context.
 * - Surface deterministic activation failures.
 *
 * Future Evolution:
 * - Constructor parameter injection.
 * - Optional parameters.
 * - Activation pipeline.
 * - Interceptors.
 */
export class ConstructorActivator implements ServiceActivator {
  /**
   * Runtime constructor selector.
   */
  private readonly selector = new ConstructorSelector();

  /**
   * Activates a service implementation.
   */
  public activate<T>(context: ActivationContext<T>): T {
    const implementation = context.descriptor.implementation;

    try {
      const Constructor = this.selector.select<T>(
        implementation,
        String(context.identifier),
      );

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
