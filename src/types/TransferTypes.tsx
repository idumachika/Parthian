export type FundTransferType = {
  account_bank: string;
  account_number: string;
  amount: number;
  narration: string;
  currency: string;
  reference: string;
  callback_url: string;
  debit_currency: string;
};


export type BankType = {
  account_bank: string;
  account_number: string;
  amount: string;
};

export type Banks = {
  banks: BankType[];
};


