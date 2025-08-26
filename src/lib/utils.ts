import { NovaPoshtaData } from "@/interfaces/NovaPoshtaResponse";

/**
 * Форматує ціну, додаючи пробіл після тисяч
 * @param price - ціна в грн
 * @returns відформатована ціна з пробілом після тисяч
 *
 * Приклади:
 * formatPrice(1610) -> "1 610"
 * formatPrice(50000) -> "50 000"
 * formatPrice(1234567) -> "1 234 567"
 */
export function formatPrice(price: number): string {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

/**
 * Форматує ціну з одиницею валюти
 * @param price - ціна в грн
 * @param currency - валюта (за замовчуванням 'грн')
 * @returns відформатована ціна з валютою
 *
 * Приклади:
 * formatPriceWithCurrency(1610) -> "1 610 грн"
 * formatPriceWithCurrency(50000, '$') -> "50 000 $"
 */
export function formatPriceWithCurrency(price: number, currency: string = 'грн'): string {
  return `${formatPrice(price)} ${currency}`;
}

export function parseNovaPoshtaCities(data : NovaPoshtaData) : string[]{
    return data.Addresses.map((address) => address.Present);
}