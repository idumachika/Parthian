import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import type {FundTransferType, Banks} from '../types/TransferTypes';

export const transferApi = createApi({
  reducerPath: 'transferSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.flutterwave.com/v3/',
  }),
  endpoints: builder => ({
    getBanks: builder.query({
      query: () => ({
        url: 'banks/NG',
        method: 'GET',
        headers: {
          Authorization: 'Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X',
          'Content-Type': 'application/json',
        },
      }),
    }),

    getAllPayment: builder.query({
      query: () => ({
        url: 'transfers',
        method: 'GET',
        headers: {
          Authorization: 'Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X',
          'Content-Type': 'application/json',
        },
      }),
    }),
    getAllPaymentByID: builder.query({
      query: id => ({
        url: `transfers/${id}`,
        method: 'GET',
        headers: {
          Authorization: 'Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X',
          'Content-Type': 'application/json',
        },
      }),
    }),
    fundTransfer: builder.mutation({
      query: payload => ({
        url: 'transfers',
        method: 'POST',
        body: payload,
        headers: {
          Authorization: 'Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X',
          'Content-Type': 'application/json',
        },
      }),
    }),

    accountVerification: builder.mutation({
      query: payload => ({
        url: 'accounts/resolve',
        method: 'POST',
        body: payload,
        headers: {
          Authorization: 'Bearer FLWSECK_TEST-SANDBOXDEMOKEY-X',
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useFundTransferMutation,
  useGetBanksQuery,
  useGetAllPaymentQuery,
  useGetAllPaymentByIDQuery,
  useAccountVerificationMutation
} = transferApi;
