import { RuntimeTelemetryRecord } from "./RuntimeTelemetryRecord.js";

/**
 * PEOS™
 * Runtime Telemetry Report
 *
 * Represents the aggregated outcome of a runtime telemetry
 * collection operation.
 */
export interface RuntimeTelemetryReport {
  /**
   * Total number of collected telemetry records.
   */
  readonly totalRecords: number;

  /**
   * Collection of runtime telemetry records.
   */
  readonly records: readonly RuntimeTelemetryRecord[];
}
