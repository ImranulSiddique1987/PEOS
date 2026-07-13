/**
 * Shared platform contracts.
 */

export interface PlatformComponent {
  readonly name: string;
  readonly version: string;
}

export * from "./error";
