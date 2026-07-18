/**
 * PEOS Platform
 * Shared Platform Orchestration Contracts Foundation
 *
 * Factory responsible for creating orchestration components.
 */

import type { Orchestration } from "./Orchestration.js";
import type { OrchestrationDescriptor } from "./OrchestrationDescriptor.js";

export interface OrchestrationFactory {
  /**
   * Creates an orchestration component from its descriptor.
   */
  create(descriptor: OrchestrationDescriptor): Orchestration;
}
