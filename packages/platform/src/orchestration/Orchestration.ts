/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Defines the core abstraction representing an orchestration component.
 */

import type { OrchestrationContext } from "./OrchestrationContext.js";
import type { OrchestrationDescriptor } from "./OrchestrationDescriptor.js";
import type { OrchestrationMetadata } from "./OrchestrationMetadata.js";

export interface Orchestration {
  /**
   * Unique orchestration identifier.
   */
  readonly id: string;

  /**
   * Human-readable orchestration name.
   */
  readonly name: string;

  /**
   * Orchestration descriptor.
   */
  readonly descriptor: OrchestrationDescriptor;

  /**
   * Orchestration metadata.
   */
  readonly metadata: OrchestrationMetadata;

  /**
   * Initializes the orchestration component.
   */
  initialize(context: OrchestrationContext): Promise<void>;

  /**
   * Disposes the orchestration component.
   */
  dispose(): Promise<void>;
}
