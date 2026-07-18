import type { Pipeline } from "./Pipeline";
import type { PipelineContext } from "./PipelineContext";

/**
 * Factory contract responsible for creating pipeline instances.
 *
 * Implementations are provided by runtime layers. The Platform package
 * defines only the contract.
 */
export interface PipelineFactory {
  /**
   * Creates a pipeline instance.
   *
   * @param context Optional pipeline context.
   * @returns A pipeline contract.
   */
  create(context?: PipelineContext): Pipeline;
}
