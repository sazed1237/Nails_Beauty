/**
 * Formats a number with leading zero if the number is less than 10
 * Example: 1 → 01
 */
export function formatWithLeadingZero(num: number) {
  return num < 10 ? num.toString().padStart(2, "0") : num.toString();
}

/**
 * Formats a number as a localized currency string.
 * Example:
 *  - 12504343434343434 → "$12.5T"
 *  - 12 → "$12"
 *  - 12.5 → "$12.5"
 */
export function formatCurrency(
  value: number | unknown,
  options: FormatCurrencyOptions = {},
): string {
  const {
    locale = "en-US",
    currency = "USD",
    notation = "standard",
    maximumFractionDigits = 2,
    suffix,
  } = options;

  if (typeof value === "string") {
    value = parseInt(value, 10);
  }

  if (isNaN(value as number)) return "N/A";

  const hasDecimal = !Number.isInteger(value);

  const price = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    notation,
    minimumFractionDigits: hasDecimal ? 2 : 0,
    maximumFractionDigits: hasDecimal ? maximumFractionDigits : 0,
  }).format(value as number);

  // Add currency Suffix ex: -> $12 USD
  if (suffix === true) {
    return `${price} ${currency}`;
  }
  if (typeof suffix === "string" && suffix !== "") {
    return `${price} ${suffix}`;
  }

  return price;
}

export interface FormatCurrencyOptions {
  locale?: string;
  currency?: string;
  suffix?: boolean | string;
  notation?: "standard" | "scientific" | "engineering" | "compact";
  maximumFractionDigits?: number;
}
