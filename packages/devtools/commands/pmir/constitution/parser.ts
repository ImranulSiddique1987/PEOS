import { ConstitutionMarkers, buildMarker } from "./markers.js";

import type {
  ConstitutionDocument,
  ConstitutionMarker,
  ConstitutionMilestone,
  ConstitutionVersion,
} from "./model.js";

function readMarkerValue(content: string, marker: string): ConstitutionMarker {
  const escaped = marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  const regex = new RegExp(
    `<!--\\s*${escaped}\\s*-->\\s*\\r?\\n([^\\r\\n]+)`,
    "m",
  );

  const match = regex.exec(content);

  if (!match || match.index < 0) {
    throw new Error(
      `Unable to locate constitutional marker: ${buildMarker(marker as never)}`,
    );
  }

  return {
    id: marker,
    value: match[1].trim(),
    start: match.index,
    end: match.index + match[0].length,
  };
}

function parseVersion(value: string): ConstitutionVersion {
  const version = value.match(/\d+\.\d+\.\d+/);

  if (!version) {
    throw new Error("Unable to parse PMIR semantic version.");
  }

  return {
    value: version[0],
  };
}

function parseMilestone(value: string): ConstitutionMilestone {
  const match = value.match(/M-\d+/);

  if (!match) {
    throw new Error(`Unable to parse milestone from "${value}".`);
  }

  return {
    id: match[0],
  };
}

export class ConstitutionParser {
  public parse(content: string): ConstitutionDocument {
    const versionMarker = readMarkerValue(content, ConstitutionMarkers.Version);

    const completedMarker = readMarkerValue(
      content,
      ConstitutionMarkers.LatestCompleted,
    );

    const nextMarker = readMarkerValue(
      content,
      ConstitutionMarkers.NextMilestone,
    );

    const markers = new Map<string, ConstitutionMarker>();

    markers.set(versionMarker.id, versionMarker);
    markers.set(completedMarker.id, completedMarker);
    markers.set(nextMarker.id, nextMarker);

    return {
      content,

      version: parseVersion(versionMarker.value),

      latestCompleted: parseMilestone(completedMarker.value),

      nextMilestone: parseMilestone(nextMarker.value),

      markers,
    };
  }
}
