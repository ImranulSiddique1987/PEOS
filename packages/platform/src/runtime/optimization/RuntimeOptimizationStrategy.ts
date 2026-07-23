import { RuntimeOptimizationResult } from "./RuntimeOptimizationResult";

/**
 * PEOS™
 * Runtime Optimization Strategy
 *
 * Defines the contract for runtime optimization strategies.
 * Future milestones may introduce multiple optimization
 * implementations without modifying the optimizer itself.
 */
export interface RuntimeOptimizationStrategy {
  /**
   * Executes runtime optimization.
   *
   * @param runtime Runtime instance.
   * @returns Optimization result.
   */
  optimize(runtime: unknown): RuntimeOptimizationResult;
}
