import type { Knowledge } from "./Knowledge";
import type { KnowledgeContext } from "./KnowledgeContext";
import type { KnowledgeFactory } from "./KnowledgeFactory";
import { KnowledgeRuntime } from "./KnowledgeRuntime";

/**
 * Default enterprise implementation of the KnowledgeFactory contract.
 *
 * The factory delegates knowledge creation to the Knowledge Runtime,
 * remaining provider-neutral and independent of storage or framework
 * specific implementations.
 */
export class DefaultKnowledgeFactory implements KnowledgeFactory {
  /**
   * Initializes a new DefaultKnowledgeFactory.
   *
   * @param runtime Knowledge runtime.
   * @param providerId Default provider identifier.
   */
  public constructor(
    private readonly runtime: KnowledgeRuntime,
    private readonly providerId: string,
  ) {}

  /**
   * Creates a knowledge instance using the configured provider.
   *
   * @param context Optional knowledge context.
   * @returns Resolved knowledge instance.
   */
  public create(context?: KnowledgeContext): Knowledge {
    return this.runtime.resolve(this.providerId, context);
  }
}
