export interface Alert {
  service: string;
  metric: string;
  startedAt: string;
}

export interface Change {
  sha: string;
  title: string;
  mergedAt: string;
  paths: string[];
}

export function rankSuspectChanges(alert: Alert, changes: Change[]): Change[] {
  const serviceHint = `services/${alert.service}/`;

  return changes
    .filter((change) => change.paths.some((path) => path.startsWith(serviceHint) || path.includes("middleware")))
    .sort((a, b) => b.mergedAt.localeCompare(a.mergedAt));
}
