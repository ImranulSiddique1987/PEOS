import type { Knowledge } from "./Knowledge";
import type { KnowledgeContext } from "./KnowledgeContext";
import type { KnowledgeProvider } from "./KnowledgeProvider";
import { KnowledgeRegistry } from "./KnowledgeRegistry";
import { KnowledgeResolver } from "./KnowledgeResolver";

/**
 * Enterprise Knowledge Runtime.
 *
 * The Knowledge Runtime is the central runtime entry point responsible
 * for managing knowledge providers and resolving knowledge instances.
 *
 * It intentionally remains provider-neutral and introduces no storage,
 * framework, or AI-specific dependencies.
 */
export class KnowledgeRuntime {
  private readonly registry: KnowledgeRegistry;

  private readonly resolver: KnowledgeResolver;

  /**
   * Creates a new Knowledge Runtime.
   */
  public constructor() {
    this.registry = new KnowledgeRegistry();
    this.resolver = new KnowledgeResolver(this.registry);
  }

  /**
   * Registers a knowledge provider.
   *
   * @param provider Knowledge provider.
   */
  public register(provider: KnowledgeProvider): void {
    this.registry.register(provider);
  }

  /**
   * Unregisters a knowledge provider.
   *
   * @param providerId Provider identifier.
   * @returns True if the provider was removed.
   */
  public unregister(providerId: string): boolean {
    return this.registry.unregister(providerId);
  }

  /**
   * Resolves a knowledge instance.
   *
   * @param providerId Provider identifier.
   * @param context Optional knowledge context.
   * @returns Resolved knowledge instance.
   */
  public resolve(providerId: string, context?: KnowledgeContext): Knowledge {
    return this.resolver.resolve(providerId, context);
  }

  /**
   * Determines whether a provider is registered.
   *
   * @param providerId Provider identifier.
   * @returns True if registered.
   */
  public has(providerId: string): boolean {
    return this.registry.has(providerId);
  }

  /**
   * Returns all registered providers.
   *
   * @returns Immutable collection of providers.
   */
  public getProviders(): readonly KnowledgeProvider[] {
    return this.registry.getAll();
  }

  /**
   * Removes all registered providers.
   */
  public clear(): void {
    this.registry.clear();
  }

  /**
   * Returns the number of registered providers.
   */
  public get size(): number {
    return this.registry.size;
  }
}
