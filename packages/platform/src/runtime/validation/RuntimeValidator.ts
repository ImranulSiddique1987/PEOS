import { RuntimeValidationResult } from "./RuntimeValidationResult";
import { RuntimeValidationIssue } from "./RuntimeValidationIssue";
import { RuntimeValidationSeverity } from "./RuntimeValidationSeverity";

/**
 * PEOS™
 * Runtime Validator
 *
 * Provides the foundational runtime validation pipeline.
 * Future milestones may extend this validator with diagnostics,
 * telemetry, performance analysis, and enterprise validation rules.
 */
export class RuntimeValidator {
  /**
   * Validates a runtime instance.
   *
   * @param runtime Runtime instance to validate.
   * @returns Validation result.
   */
  public validate(runtime: unknown): RuntimeValidationResult {
    const issues: RuntimeValidationIssue[] = [];

    if (runtime === null || runtime === undefined) {
      issues.push({
        code: "RUNTIME_NULL",
        message: "Runtime instance cannot be null or undefined.",
        severity: RuntimeValidationSeverity.Error,
      });
    }

    return {
      success: issues.length === 0,
      issues,
    };
  }
}
