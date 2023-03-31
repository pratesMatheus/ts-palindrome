export function capitalize (str: string) {
  const toLower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + toLower.slice(1);
}