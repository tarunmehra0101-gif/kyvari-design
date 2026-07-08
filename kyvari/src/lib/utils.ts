/** Join class names, skipping falsy values. */
export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

/** "₹1,84,000" / "$5,200" style currency formatting. */
export function formatMoney(amount: number, currency: string = "USD") {
  return new Intl.NumberFormat(currency === "INR" ? "en-IN" : "en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

/** "12 Aug – 19 Aug 2026" from two ISO dates. */
export function formatDateRange(startISO: string, endISO: string) {
  const start = new Date(startISO);
  const end = new Date(endISO);
  const day = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
  return `${day(start)} – ${day(end)} ${end.getFullYear()}`;
}

/** Trip length in nights. */
export function nightsBetween(startISO: string, endISO: string) {
  const ms = new Date(endISO).getTime() - new Date(startISO).getTime();
  return Math.max(1, Math.round(ms / 86_400_000));
}
