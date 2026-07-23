import { RuntimePerformanceMetrics } from "./RuntimePerformanceMetrics";

/**
 * PEOS™
 * Runtime Optimization Result
 *
 * Represents the outcome of a runtime optimization operation.
 */
export interface RuntimeOptimizationResult {
  /**
   * Indicates whether optimization completed successfully.
   */
  readonly success: boolean;

  /**
   * Human-readable optimization recommendations.
   */
  readonly recommendations: readonly string[];

  /**
   * Runtime performance metrics collected during optimization.
   */
  readonly metrics: RuntimePerformanceMetrics;
}
