import type { Knowledge } from "./Knowledge";
import type { KnowledgeContext } from "./KnowledgeContext";
import { KnowledgeRegistry } from "./KnowledgeRegistry";

/**
 * Enterprise runtime resolver responsible for resolving knowledge
 * instances from registered providers.
 *
 * The resolver delegates knowledge creation to the appropriate
 * provider while remaining completely provider-neutral.
 */
export class KnowledgeResolver {
  /**
   * Initializes a new knowledge resolver.
   *
   * @param registry Knowledge provider registry.
   */
  public constructor(private readonly registry: KnowledgeRegistry) {}

  /**
   * Resolves a knowledge instance from the specified provider.
   *
   * @param providerId Provider identifier.
   * @param context Optional knowledge context.
   * @returns Resolved knowledge instance.
   *
   * @throws Error if the provider is not registered.
   */
  public resolve(providerId: string, context?: KnowledgeContext): Knowledge {
    const provider = this.registry.get(providerId);

    if (provider === undefined) {
      throw new Error(`Knowledge provider '${providerId}' is not registered.`);
    }

    return provider.getKnowledge(context);
  }

  /**
   * Determines whether a provider can be resolved.
   *
   * @param providerId Provider identifier.
   * @returns True if the provider exists.
   */
  public canResolve(providerId: string): boolean {
    return this.registry.has(providerId);
  }
}
