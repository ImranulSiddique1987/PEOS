/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

/**
 * Represents an activation failure within the PEOS
 * dependency injection runtime.
 *
 * Responsibilities:
 * - Standardize activation errors.
 * - Preserve root causes.
 * - Provide contextual information.
 *
 * Future Evolution:
 * - Error codes
 * - Activation stack traces
 * - Circular dependency diagnostics
 * - Scope diagnostics
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
}
