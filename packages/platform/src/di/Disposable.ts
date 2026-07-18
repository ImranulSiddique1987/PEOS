/**
 * Copyright (c) PEOS Contributors.
 * Licensed under the MIT License.
 */

/**
 * Represents a runtime resource that can be disposed.
 *
 * Responsibilities:
 * - Release owned resources.
 * - Support deterministic cleanup.
 *
 * Non-Responsibilities:
 * - Lifetime management
 * - Scope management
 * - Dependency resolution
 *
 * Future Evolution (Deferred):
 * - Async disposal
 * - Hierarchical disposal
 * - Scoped disposal
 */
export interface Disposable {
  /**
   * Releases any resources owned by the instance.
   */
  dispose(): void;
}
