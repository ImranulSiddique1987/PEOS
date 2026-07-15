import type { AIContext } from "./AIContext";
import type { AIModel } from "./AIModel";
import type { AIMetadata } from "./AIMetadata";

/**
 * Represents an AI runtime request.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIRequest {
  /**
   * Unique request identifier.
   */
  readonly id: string;

  /**
   * Target AI model.
   */
  readonly model: AIModel;

  /**
   * Input payload.
   */
  readonly input: unknown;

  /**
   * Optional execution context.
   */
  readonly context?: AIContext;

  /**
   * Optional request metadata.
   */
  readonly metadata?: AIMetadata;
}
