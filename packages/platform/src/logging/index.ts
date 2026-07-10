/**
 * Shared platform logging contracts.
 *
 * This module defines logging abstractions only.
 * Runtime implementations will be introduced in future milestones.
 */

/**
 * Supported log levels.
 */
export type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal";

/**
 * Common log entry contract.
 */
export interface LogEntry {
  readonly timestamp: Date;
  readonly level: LogLevel;
  readonly message: string;
  readonly context?: Record<string, unknown>;
  readonly error?: Error;
}

/**
 * Platform logger abstraction.
 */
export interface PlatformLogger {
  trace(message: string, context?: Record<string, unknown>): void;

  debug(message: string, context?: Record<string, unknown>): void;

  info(message: string, context?: Record<string, unknown>): void;

  warn(message: string, context?: Record<string, unknown>): void;

  error(
    message: string,
    error?: Error,
    context?: Record<string, unknown>,
  ): void;

  fatal(
    message: string,
    error?: Error,
    context?: Record<string, unknown>,
  ): void;
}
