import { RuntimeDiagnosticSeverity } from "./RuntimeDiagnosticSeverity";

/**
 * PEOS™
 * Runtime Diagnostic
 *
 * Represents a single runtime diagnostic record.
 */
export interface RuntimeDiagnostic {
  readonly code: string;
  readonly message: string;
  readonly severity: RuntimeDiagnosticSeverity;
}
