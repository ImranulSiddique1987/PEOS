import { RuntimeStatus } from "./RuntimeStatus.js";
import type { RuntimeState } from "./RuntimeState.js";
import { RuntimeStateError } from "./RuntimeErrors.js";

/**
 * Manages runtime lifecycle state transitions.
 *
 * RuntimeLifecycle is intentionally responsible only for validating and
 * producing immutable lifecycle state transitions. It does not perform
 * activation, dependency resolution, scheduling or orchestration.
 */
export class RuntimeLifecycle {
  /**
   * Creates the initial runtime state.
   */
  public initialize(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.CREATED,
      RuntimeStatus.INITIALIZING,
    );
  }

  /**
   * Marks initialization as completed.
   */
  public initialized(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.INITIALIZING,
      RuntimeStatus.INITIALIZED,
    );
  }

  /**
   * Begins runtime startup.
   */
  public start(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.INITIALIZED,
      RuntimeStatus.STARTING,
    );
  }

  /**
   * Marks runtime as running.
   */
  public running(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.STARTING,
      RuntimeStatus.RUNNING,
    );
  }

  /**
   * Begins runtime shutdown.
   */
  public stop(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.RUNNING,
      RuntimeStatus.STOPPING,
    );
  }

  /**
   * Marks runtime as stopped.
   */
  public stopped(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.STOPPING,
      RuntimeStatus.STOPPED,
    );
  }

  /**
   * Begins runtime disposal.
   */
  public dispose(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.STOPPED,
      RuntimeStatus.DISPOSING,
    );
  }

  /**
   * Marks runtime as disposed.
   */
  public disposed(state: RuntimeState): RuntimeState {
    return this.transition(
      state,
      RuntimeStatus.DISPOSING,
      RuntimeStatus.DISPOSED,
    );
  }

  /**
   * Marks runtime as failed.
   */
  public failed(state: RuntimeState, error: Error): RuntimeState {
    return Object.freeze({
      ...state,
      status: RuntimeStatus.FAILED,
      timestamp: new Date(),
      error,
      message: error.message,
    });
  }

  private transition(
    state: RuntimeState,
    expected: RuntimeStatus,
    next: RuntimeStatus,
  ): RuntimeState {
    if (state.status !== expected) {
      throw new RuntimeStateError(
        `Invalid runtime transition from '${state.status}' to '${next}'. Expected '${expected}'.`,
      );
    }

    return Object.freeze({
      ...state,
      status: next,
      timestamp: new Date(),
    });
  }
}
