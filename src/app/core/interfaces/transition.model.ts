export interface TransactionData {
  categoryCode: string;
  dates: { valueDate: Date };
  transaction: TransactionDetail;
  merchant: {
    name: string;
    accountNumber: string;
  };
}
interface TransactionDetail {
  amountCurrency: {
    amount: number;
    currencyCode: string;
  };
  type: string;
  creditDebitIndicator: string;
}
