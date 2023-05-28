import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionIncomeCategories,
  getTransactionExpenseCategories,
  getTransactionPeriod,
} from './reportsOperations';

const initialState = {
  isLoading: false,
  error: null,
  incomeCategories: [],
  expenseCategories: [],
  incomes: {
    incomeTotal: 0,
    incomesData: {},
  },
  expenses: {
    expenseTotal: 0,
    expensesData: {},
  },
};

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getTransactionIncomeCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getTransactionIncomeCategories.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
          // TO CHECK below!!!
          state.incomeCategories = payload;
        }
      )
      .addCase(
        getTransactionIncomeCategories.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addCase(getTransactionExpenseCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        getTransactionExpenseCategories.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = null;
          //TO CHECK below!!!
          state.expenseCategories = payload;
        }
      )
      .addCase(
        getTransactionExpenseCategories.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        }
      )
      .addCase(getTransactionPeriod.pending, state => {
        state.isLoading = true;
      })
      .addCase(getTransactionPeriod.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        //TO CHECK below!!!
        state.expenses = payload.expenses;
        state.incomes = payload.incomes;
      })
      .addCase(getTransactionPeriod.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default reportsSlice.reducer;
