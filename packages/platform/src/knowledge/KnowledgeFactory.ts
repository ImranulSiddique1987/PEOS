import type { Knowledge } from "./Knowledge";
import type { KnowledgeContext } from "./KnowledgeContext";

/**
 * Factory contract responsible for creating knowledge instances.
 *
 * Implementations are provided by runtime layers. The Platform package
 * defines only the contract.
 */
export interface KnowledgeFactory {
  /**
   * Creates a knowledge instance.
   *
   * @param context Optional knowledge context.
   * @returns A knowledge contract.
   */
  create(context?: KnowledgeContext): Knowledge;
}
