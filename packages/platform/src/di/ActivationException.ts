/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

import type { ServiceIdentifier } from "./ServiceIdentifier.js";

/**
 * Represents an activation failure within the PEOS
 * dependency injection runtime.
 *
 * Responsibilities:
 * - Standardize activation errors.
 * - Preserve root causes.
 * - Provide contextual information.
 * - Report deterministic circular dependency diagnostics.
 */
export class ActivationException extends Error {
  /**
   * Creates a new activation exception.
   *
   * @param message Human-readable error message.
   * @param cause Optional underlying error.
   */
  public constructor(
    message: string,
    public readonly cause?: unknown,
  ) {
    super(message);

    this.name = "ActivationException";

    Object.setPrototypeOf(this, new.target.prototype);
  }

  /**
   * Creates a deterministic circular dependency exception.
   *
   * Example:
   *
   * ServiceA
   *   ↓
   * ServiceB
   *   ↓
   * ServiceC
   *   ↓
   * ServiceA
   */
  public static circularDependency(
    stack: readonly ServiceIdentifier[],
    current: ServiceIdentifier,
  ): ActivationException {
    const cycleStart = stack.indexOf(current);

    const cycle =
      cycleStart >= 0
        ? [...stack.slice(cycleStart), current]
        : [...stack, current];

    const chain = cycle
      .map((identifier) => ActivationException.formatIdentifier(identifier))
      .join(" -> ");

    return new ActivationException(`Circular dependency detected: ${chain}`);
  }

  /**
   * Formats a service identifier into a deterministic,
   * human-readable string.
   */
  private static formatIdentifier(identifier: ServiceIdentifier): string {
    if (typeof identifier === "string") {
      return identifier;
    }

    if (typeof identifier === "symbol") {
      return identifier.description ?? identifier.toString();
    }

    if (typeof identifier === "function") {
      return identifier.name || "<anonymous>";
    }

    return String(identifier);
  }
}
