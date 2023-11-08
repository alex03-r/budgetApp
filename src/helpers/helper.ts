export function capitalizeName(name: string) {
  return name[0].toUpperCase() + name.slice(1);
}

export function formatWithCurrency(amount: number) {
  const options = { style: "currency", currency: "DOP" };

  const formaters = new Intl.NumberFormat("en-Es", options);

  return formaters.format(amount);
}

export function formatAmount(amount: number) {
  const formaters = new Intl.NumberFormat("en-Es");

  return formaters.format(amount);
}

export function isPar(number: number) {
  return number % 2 == 0;
}

export function changeRangeValue(
  totalSpented: number,
  budgetTotalAmount: number
) {
  const value = (totalSpented / budgetTotalAmount) * 100;

  return 100 - value;
}

function All() {
  return 0;
}
