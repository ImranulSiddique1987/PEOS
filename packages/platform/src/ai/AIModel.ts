import type { AICapability } from "./AICapability";
import type { AIMetadata } from "./AIMetadata";

/**
 * Represents an AI model contract.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIModel {
  /**
   * Unique model identifier.
   */
  readonly id: string;

  /**
   * Model name.
   */
  readonly name: string;

  /**
   * Optional model version.
   */
  readonly version?: string;

  /**
   * Optional model capabilities.
   */
  readonly capabilities?: ReadonlyArray<AICapability>;

  /**
   * Optional model metadata.
   */
  readonly metadata?: AIMetadata;
}
