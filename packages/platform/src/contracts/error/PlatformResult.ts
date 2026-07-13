import type { PlatformError } from "./PlatformError";

export type PlatformResult<T> =
  | {
      readonly success: true;
      readonly data: T;
    }
  | {
      readonly success: false;
      readonly error: PlatformError;
    };
