/**
 * Defines the lifecycle status of a Platform Runtime.
 *
 * RuntimeStatus represents the current operational state of a runtime
 * instance. The values are intentionally generic to support future runtime
 * implementations without prescribing execution semantics.
 */
export enum RuntimeStatus {
  CREATED = "created",
  INITIALIZING = "initializing",
  INITIALIZED = "initialized",
  STARTING = "starting",
  RUNNING = "running",
  STOPPING = "stopping",
  STOPPED = "stopped",
  DISPOSING = "disposing",
  DISPOSED = "disposed",
  FAILED = "failed",
}
