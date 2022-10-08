export function IntlAddress(address: string): string {
  return (
    address.slice(0, 16).concat("...") + address.substring(address.length - 8)
  );
}
