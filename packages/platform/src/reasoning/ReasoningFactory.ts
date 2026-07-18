/**
 * PEOS Platform
 * Shared Platform Reasoning Contracts Foundation
 *
 * Factory responsible for creating reasoning components.
 */

import type { Reasoning } from "./Reasoning.js";
import type { ReasoningDescriptor } from "./ReasoningDescriptor.js";

export interface ReasoningFactory {
  /**
   * Creates a reasoning component from its descriptor.
   */
  create(descriptor: ReasoningDescriptor): Reasoning;
}
