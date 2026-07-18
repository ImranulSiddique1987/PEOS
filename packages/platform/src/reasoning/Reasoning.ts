/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Defines the core abstraction representing a reasoning component.
 */

import type { ReasoningContext } from "./ReasoningContext.js";
import type { ReasoningDescriptor } from "./ReasoningDescriptor.js";
import type { ReasoningMetadata } from "./ReasoningMetadata.js";

export interface Reasoning {
  /**
   * Unique reasoning identifier.
   */
  readonly id: string;

  /**
   * Human-readable reasoning name.
   */
  readonly name: string;

  /**
   * Reasoning descriptor.
   */
  readonly descriptor: ReasoningDescriptor;

  /**
   * Reasoning metadata.
   */
  readonly metadata: ReasoningMetadata;

  /**
   * Initializes the reasoning component.
   */
  initialize(context: ReasoningContext): Promise<void>;

  /**
   * Disposes the reasoning component.
   */
  dispose(): Promise<void>;
}
