import type { AIModel } from "./AIModel";
import type { AIMetadata } from "./AIMetadata";

/**
 * Represents an AI provider contract.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIProvider {
  /**
   * Unique provider identifier.
   */
  readonly id: string;

  /**
   * Provider name.
   */
  readonly name: string;

  /**
   * Models supported by the provider.
   */
  readonly models: ReadonlyArray<AIModel>;

  /**
   * Optional provider metadata.
   */
  readonly metadata?: AIMetadata;
}
