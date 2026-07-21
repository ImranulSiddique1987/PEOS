/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import { ActivationException } from "./ActivationException.js";

/**
 * Selects the constructor used for runtime activation.
 *
 * Responsibilities:
 * - Validate implementation type.
 * - Select activation constructor.
 * - Provide deterministic constructor selection.
 *
 * Future Evolution:
 * - Constructor attribute selection.
 * - Preferred constructor support.
 * - Multiple constructor resolution.
 * - Visibility filtering.
 */
export class ConstructorSelector {
  /**
   * Selects the constructor used for activation.
   */
  public select<T>(implementation: unknown, serviceName: string): new () => T {
    if (implementation === undefined || implementation === null) {
      throw new ActivationException(
        `No implementation registered for service: ${serviceName}`,
      );
    }

    if (typeof implementation !== "function") {
      throw new ActivationException(
        `Implementation is not constructible: ${serviceName}`,
      );
    }

    return implementation as new () => T;
  }
}
