// Disposable Hutch regression fixture for mono PR #49272.
export function formatIncidentLabel(id: number): string {
  return `INC-${String(id).padStart(4, "0")}`;
}
