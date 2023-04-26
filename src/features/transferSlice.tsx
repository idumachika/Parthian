import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import type {FundTransferType} from '../types/TransferTypes';

interface InitialState {
  fundTransfer: FundTransferType[];
}

const initialState: InitialState = {
  fundTransfer: [],
};

export const transferSlice = createSlice({
  name: 'transfer',
  initialState,
  reducers: {
    FundTransfer: (
      state: InitialState,
      action: PayloadAction<FundTransferType>,
    ) => {
      state.fundTransfer.push(action.payload);
    },
  },
});

export const {FundTransfer} = transferSlice.actions;
export default transferSlice.reducer;
