import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionIncome,
  getTransactionExpense,
  addTransactionIncome,
  addTransactionExpense,
  deleteTransaction,
  addBalance,
} from './transactionOperations';

const initialState = {
  isLoading: false,
  error: null,
  filterDate: '',
  newBalance: null,
  transactionIncome: [],
  incomes: [],
  monthStatsIncome: [],
  transactionExpense: [],
  expenses: [],
  monthStatsExpenses: [],
};

const transactionSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {
    getFilterDate(state, { payload }) {
      state.filterDate = payload;
    },
  },
  extraReducers: builder => {
    builder
      // ================== GET TRANSACTION INCOME
      .addCase(getTransactionIncome.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.incomes = payload.incomes;
        state.monthStatsIncome = payload.monthsStats;
      })
      .addCase(getTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== GET TRANSACTION EXPENSE
      .addCase(getTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionExpense.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.expenses = payload.expenses;
        state.monthStatsExpenses = payload.monthsStats;
      })
      .addCase(getTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== ADD TRANSACTION INCOME
      .addCase(addTransactionIncome.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionIncome.fulfilled, (state, { payload, type }) => {
        state.isLoading = false;
        state.error = null;
        state.incomes = payload[1].incomes;
        state.monthStatsIncome = payload[1].monthsStats;
        // const transactionType = type.split('/')[1];
        // state[transactionType].push(payload.transaction);
      })
      .addCase(addTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== ADD TRANSACTION EXPENSE
      .addCase(addTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionExpense.fulfilled, (state, { payload, type }) => {
        state.isLoading = false;
        state.error = null;
        state.expenses = payload[1].expenses;
        state.monthStatsExpenses = payload[1].monthsStats;
        // const transactionType = type.split('/')[1];
        // state[transactionType].push(payload.transaction);
      })
      .addCase(addTransactionExpense.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== DELETE TRANSACTION
      .addCase(deleteTransaction.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteTransaction.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(deleteTransaction.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================= ADD BALANCE
      .addCase(addBalance.pending, state => {
        state.isLoading = true;
      })
      .addCase(addBalance.fulfilled, (state, { payload }) => {
        state.newBalance = payload.newBalance;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addBalance.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
    // // ============== GET USER INFO
    // .addCase(getUserInfo.pending, state => {
    //   state.isLoading = true;
    // })
    // .addCase(getUserInfo.fulfilled, (state, { payload }) => {
    //   state.newBalance = payload.balance;
    //   state.isLoading = false;
    //   state.error = null;
    //   // TO DO!!!
    // })
    // .addCase(getUserInfo.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
  },
});
export const { getFilterDate } = transactionSlice.actions;
export default transactionSlice.reducer;
