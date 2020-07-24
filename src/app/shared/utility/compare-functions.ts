export function compareText(a: string, b: string): number {
  const aString = a.toLowerCase();
  const bString = b.toLowerCase();
  if (aString > bString) { return 1; }
  if (aString < bString) { return -1; }
  return 0;
}
