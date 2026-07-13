export interface ErrorContext {
  readonly component?: string;
  readonly operation?: string;
  readonly correlationId?: string;
  readonly timestamp?: Date;
}
