const format = (
  num: number,
  currency?: string,
  minFraction?: number,
  maxFraction?: number
) => {
  const formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: currency || "IDR",

    minimumFractionDigits: minFraction, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: maxFraction, // (causes 2500.99 to be printed as $2,501)
  });
  return formatter.format(num);
};

export const formatCurrency = (num: number) => {
  if (num % 1 === 0) {
    return format(num, undefined, 0, 2);
  } else {
    return format(num, undefined, 2, undefined);
  }
};

export const currencyStringToNumber = (currencyString: string): number =>
  Number(currencyString.replaceAll(".", "").replaceAll(",", "."));
