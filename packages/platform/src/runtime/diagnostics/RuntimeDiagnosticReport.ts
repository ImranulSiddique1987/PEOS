import { RuntimeDiagnostic } from "./RuntimeDiagnostic";

/**
 * PEOS™
 * Runtime Diagnostic Report
 *
 * Represents the aggregated outcome of a runtime diagnostics
 * operation.
 */
export interface RuntimeDiagnosticReport {
  /**
   * Indicates whether diagnostics completed successfully.
   */
  readonly success: boolean;

  /**
   * Collection of diagnostics.
   */
  readonly diagnostics: readonly RuntimeDiagnostic[];
}
