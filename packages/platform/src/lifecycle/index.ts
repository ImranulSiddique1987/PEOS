/**
 * Platform lifecycle contracts.
 */

export interface PlatformLifecycle {
  initialize(): Promise<void>;
  shutdown(): Promise<void>;
}
