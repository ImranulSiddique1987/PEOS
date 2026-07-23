import type { Knowledge } from "./Knowledge";
import type { KnowledgeContext } from "./KnowledgeContext";
import type { KnowledgeProvider } from "./KnowledgeProvider";
import { KnowledgeRuntime } from "./KnowledgeRuntime";

/**
 * Enterprise manager responsible for coordinating Knowledge Runtime
 * operations.
 *
 * The manager provides a high-level façade over the runtime while
 * remaining provider-neutral and independent of storage or framework
 * implementations.
 */
export class KnowledgeManager {
  /**
   * Initializes a new KnowledgeManager.
   *
   * @param runtime Knowledge runtime.
   */
  public constructor(private readonly runtime: KnowledgeRuntime) {}

  /**
   * Registers a knowledge provider.
   *
   * @param provider Knowledge provider.
   */
  public register(provider: KnowledgeProvider): void {
    this.runtime.register(provider);
  }

  /**
   * Unregisters a knowledge provider.
   *
   * @param providerId Provider identifier.
   * @returns True if the provider was removed.
   */
  public unregister(providerId: string): boolean {
    return this.runtime.unregister(providerId);
  }

  /**
   * Resolves a knowledge instance.
   *
   * @param providerId Provider identifier.
   * @param context Optional knowledge context.
   * @returns Resolved knowledge instance.
   */
  public resolve(providerId: string, context?: KnowledgeContext): Knowledge {
    return this.runtime.resolve(providerId, context);
  }

  /**
   * Returns all registered providers.
   *
   * @returns Immutable collection of providers.
   */
  public getProviders(): readonly KnowledgeProvider[] {
    return this.runtime.getProviders();
  }

  /**
   * Determines whether a provider is registered.
   *
   * @param providerId Provider identifier.
   * @returns True if registered.
   */
  public has(providerId: string): boolean {
    return this.runtime.has(providerId);
  }

  /**
   * Removes all registered providers.
   */
  public clear(): void {
    this.runtime.clear();
  }

  /**
   * Returns the number of registered providers.
   */
  public get size(): number {
    return this.runtime.size;
  }
}
