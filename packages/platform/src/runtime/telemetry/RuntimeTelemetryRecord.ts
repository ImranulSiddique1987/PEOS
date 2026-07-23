import { RuntimeTelemetryLevel } from "./RuntimeTelemetryLevel.js";

/**
 * PEOS™
 * Runtime Telemetry Record
 *
 * Represents a single runtime telemetry record.
 */
export interface RuntimeTelemetryRecord {
  /**
   * Runtime event name.
   */
  readonly event: string;

  /**
   * Human-readable telemetry message.
   */
  readonly message: string;

  /**
   * Telemetry level.
   */
  readonly level: RuntimeTelemetryLevel;
}
