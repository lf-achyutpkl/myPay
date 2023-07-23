export enum Currency {
  AED = 'AED',
  PHP = 'PHP',
  NPR = 'NPR',
  PKR = 'PKR',
}

export type CurrencyPair = `${Currency}/${Currency}`;

export type Route = {
  currencyPair: CurrencyPair;
  currencyFrom: Currency;
  currencyTo: Currency;
  rate: number;
  maxAmount: number;
  fee: {
    amount: number;
    percentage: number;
  };
  processingTime: string;
};
