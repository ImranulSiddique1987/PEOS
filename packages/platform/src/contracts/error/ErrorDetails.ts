export interface ErrorDetails {
  readonly message: string;
  readonly cause?: unknown;
  readonly metadata?: Record<string, unknown>;
}
