import { ConstitutionUpdater } from "./updater.js";

import type {
  ConstitutionDocument,
  ConstitutionUpdateRequest,
  ConstitutionUpdateResult,
} from "./model.js";

/**
 * Constitutional Renderer
 *
 * Thin orchestration layer responsible for applying
 * constitutional updates.
 *
 * This class intentionally contains no business logic.
 */
export class ConstitutionRenderer {
  private readonly updater: ConstitutionUpdater;

  constructor() {
    this.updater = new ConstitutionUpdater();
  }

  public render(
    document: ConstitutionDocument,
    request: ConstitutionUpdateRequest,
  ): ConstitutionUpdateResult {
    return this.updater.update(document, request);
  }
}
