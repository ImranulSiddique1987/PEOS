import { RuntimeDiagnostic } from "./RuntimeDiagnostic";
import { RuntimeDiagnosticReport } from "./RuntimeDiagnosticReport";
import { RuntimeDiagnosticSeverity } from "./RuntimeDiagnosticSeverity";

/**
 * PEOS™
 * Runtime Diagnostics
 *
 * Collects runtime diagnostic information and produces
 * diagnostic reports.
 */
export class RuntimeDiagnostics {
  private readonly diagnostics: RuntimeDiagnostic[] = [];

  public add(
    code: string,
    message: string,
    severity: RuntimeDiagnosticSeverity,
  ): void {
    this.diagnostics.push({
      code,
      message,
      severity,
    });
  }

  public getDiagnostics(): readonly RuntimeDiagnostic[] {
    return this.diagnostics;
  }

  public clear(): void {
    this.diagnostics.length = 0;
  }

  public report(): RuntimeDiagnosticReport {
    return {
      success: this.diagnostics.every(
        (diagnostic) =>
          diagnostic.severity !== RuntimeDiagnosticSeverity.Error &&
          diagnostic.severity !== RuntimeDiagnosticSeverity.Critical,
      ),
      diagnostics: this.diagnostics,
    };
  }
}
