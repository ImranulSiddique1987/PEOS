/**
 * Represents the canonical Platform Service contract.
 *
 * Platform services are runtime-independent abstractions that describe
 * capabilities provided within the PEOS Platform. This contract defines
 * only the shared interface required for future service composition.
 *
 * Implementations, lifecycle management, dependency resolution, and
 * runtime activation are intentionally out of scope.
 */
export interface Service {
  /**
   * Unique service identifier.
   */
  readonly id: string;

  /**
   * Human-readable service name.
   */
  readonly name: string;

  /**
   * Semantic version of the service.
   */
  readonly version: string;
}
