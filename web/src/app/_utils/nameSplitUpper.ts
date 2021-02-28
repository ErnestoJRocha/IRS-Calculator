export default function nameSplitUpper(str: string): string {
  return str
    .split('.')
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join(' ');
}
