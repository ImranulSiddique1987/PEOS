import type { ErrorCategory } from "./ErrorCategory";
import type { ErrorCode } from "./ErrorCode";
import type { ErrorContext } from "./ErrorContext";
import type { ErrorDetails } from "./ErrorDetails";
import type { ErrorSeverity } from "./ErrorSeverity";

export interface PlatformError {
  readonly code: ErrorCode;
  readonly category: ErrorCategory;
  readonly severity: ErrorSeverity;
  readonly details: ErrorDetails;
  readonly context?: ErrorContext;
}
