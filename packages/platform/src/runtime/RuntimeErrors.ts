/**
 * Base error type for all Platform Runtime failures.
 */
export class RuntimeError extends Error {
  /**
   * Creates a RuntimeError.
   *
   * @param message Error description.
   * @param cause Optional underlying cause.
   */
  public constructor(message: string, cause?: Error) {
    super(message);

    this.name = "RuntimeError";

    if (cause !== undefined) {
      this.cause = cause;
    }
  }
}

/**
 * Thrown when a runtime cannot be located.
 */
export class RuntimeNotFoundError extends RuntimeError {
  public constructor(runtimeId: string) {
    super(`Runtime '${runtimeId}' was not found.`);
    this.name = "RuntimeNotFoundError";
  }
}

/**
 * Thrown when runtime activation fails.
 */
export class RuntimeActivationError extends RuntimeError {
  public constructor(runtimeId: string, cause?: Error) {
    super(`Failed to activate runtime '${runtimeId}'.`, cause);
    this.name = "RuntimeActivationError";
  }
}

/**
 * Thrown when an invalid runtime state transition occurs.
 */
export class RuntimeStateError extends RuntimeError {
  public constructor(message: string) {
    super(message);
    this.name = "RuntimeStateError";
  }
}
