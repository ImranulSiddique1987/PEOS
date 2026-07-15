import type { AIRequest } from "./AIRequest";
import type { AIResponse } from "./AIResponse";
import type { AIMetadata } from "./AIMetadata";

/**
 * Represents an AI runtime contract.
 *
 * Platform Contract
 * - Interface only
 * - Runtime-free
 * - Framework-agnostic
 * - Public API
 */
export interface AIRuntime {
  /**
   * Unique runtime identifier.
   */
  readonly id: string;

  /**
   * Runtime name.
   */
  readonly name: string;

  /**
   * Optional runtime metadata.
   */
  readonly metadata?: AIMetadata;

  /**
   * Executes an AI request.
   */
  execute(request: AIRequest): Promise<AIResponse>;
}
