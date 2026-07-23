import { RuntimeOptimizationResult } from "./RuntimeOptimizationResult";
import { RuntimeOptimizationStrategy } from "./RuntimeOptimizationStrategy";

/**
 * PEOS™
 * Runtime Optimizer
 *
 * Coordinates runtime optimization by delegating to a
 * configured optimization strategy.
 */
export class RuntimeOptimizer {
  public constructor(private readonly strategy: RuntimeOptimizationStrategy) {}

  /**
   * Optimizes a runtime instance.
   *
   * @param runtime Runtime instance.
   * @returns Optimization result.
   */
  public optimize(runtime: unknown): RuntimeOptimizationResult {
    return this.strategy.optimize(runtime);
  }
}
