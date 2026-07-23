import { RuntimeTelemetryLevel } from "./RuntimeTelemetryLevel.js";
import { RuntimeTelemetryRecord } from "./RuntimeTelemetryRecord.js";
import { RuntimeTelemetryReport } from "./RuntimeTelemetryReport.js";

/**
 * PEOS™
 * Runtime Telemetry
 *
 * Collects runtime telemetry records and produces
 * telemetry reports.
 */
export class RuntimeTelemetry {
  private readonly records: RuntimeTelemetryRecord[] = [];

  /**
   * Tracks a runtime telemetry event.
   *
   * @param event Runtime event name.
   * @param message Human-readable telemetry message.
   * @param level Telemetry level.
   */
  public track(
    event: string,
    message: string,
    level: RuntimeTelemetryLevel,
  ): void {
    this.records.push({
      event,
      message,
      level,
    });
  }

  /**
   * Returns all collected telemetry records.
   */
  public getRecords(): readonly RuntimeTelemetryRecord[] {
    return this.records;
  }

  /**
   * Clears all collected telemetry records.
   */
  public clear(): void {
    this.records.length = 0;
  }

  /**
   * Creates a telemetry report.
   */
  public report(): RuntimeTelemetryReport {
    return {
      totalRecords: this.records.length,
      records: this.records,
    };
  }
}
