/**
 * PEOS™
 * Runtime Performance Metrics
 *
 * Represents lightweight runtime performance counters.
 * Future milestones may extend this model with timing,
 * telemetry, diagnostics, and profiling information.
 */
export interface RuntimePerformanceMetrics {
  /**
   * Number of runtime validation operations performed.
   */
  readonly validationCount: number;

  /**
   * Number of runtime activation operations performed.
   */
  readonly activationCount: number;

  /**
   * Number of runtime resolution operations performed.
   */
  readonly resolutionCount: number;
}
