export const defailtDataSalesTurnOver = {
  price: 0,
  percentage: 0,
};
export const DataSalesTurnOver = {
  today: { ...defailtDataSalesTurnOver },
  yesterday: {
    price: 3600000,
    percentage: 13.8,
  },
  last7Day: {
    price: 4400000,
    percentage: 15,
  },
  last30Day: {
    price: 5400000,
    percentage: 18,
  },
  thisMonth: {
    price: 10400000,
    percentage: 50,
  },
  custom: {
    price: 24400000,
    percentage: 70,
  },
};
