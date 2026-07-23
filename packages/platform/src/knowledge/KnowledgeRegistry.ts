import type { KnowledgeProvider } from "./KnowledgeProvider";

/**
 * Enterprise runtime registry responsible for managing knowledge providers.
 *
 * The registry maintains provider registrations for the Knowledge Runtime
 * without introducing storage, framework, or dependency injection concerns.
 *
 * Responsibilities:
 * - Register knowledge providers
 * - Resolve providers by identifier
 * - Enumerate registered providers
 * - Remove provider registrations
 *
 * This implementation is intentionally lightweight and provider-neutral.
 */
export class KnowledgeRegistry {
  private readonly providers = new Map<string, KnowledgeProvider>();

  /**
   * Registers a knowledge provider.
   *
   * @param provider Knowledge provider to register.
   *
   * @throws Error if the provider identifier is empty.
   * @throws Error if a provider with the same identifier is already registered.
   */
  register(provider: KnowledgeProvider): void {
    const id = provider.id.trim();

    if (id.length === 0) {
      throw new Error("Knowledge provider identifier cannot be empty.");
    }

    if (this.providers.has(id)) {
      throw new Error(`Knowledge provider '${id}' is already registered.`);
    }

    this.providers.set(id, provider);
  }

  /**
   * Unregisters a knowledge provider.
   *
   * @param providerId Provider identifier.
   * @returns True if removed; otherwise false.
   */
  unregister(providerId: string): boolean {
    return this.providers.delete(providerId);
  }

  /**
   * Determines whether a provider is registered.
   *
   * @param providerId Provider identifier.
   * @returns True if registered.
   */
  has(providerId: string): boolean {
    return this.providers.has(providerId);
  }

  /**
   * Retrieves a registered provider.
   *
   * @param providerId Provider identifier.
   * @returns Registered provider or undefined.
   */
  get(providerId: string): KnowledgeProvider | undefined {
    return this.providers.get(providerId);
  }

  /**
   * Returns all registered providers.
   *
   * The returned collection is immutable to callers.
   */
  getAll(): readonly KnowledgeProvider[] {
    return Object.freeze([...this.providers.values()]);
  }

  /**
   * Removes all registered providers.
   */
  clear(): void {
    this.providers.clear();
  }

  /**
   * Number of registered providers.
   */
  get size(): number {
    return this.providers.size;
  }
}
