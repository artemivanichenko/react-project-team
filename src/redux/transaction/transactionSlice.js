import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionIncome,
  getTransactionExpense,
  addTransactionIncome,
  addTransactionExpense,
  deleteTransaction,
  addBalance,
  // getUserInfo,
} from './transactionOperations';

const initialState = {
  isLoading: false,
  error: null,
  filterDate: null,
  newBalance: 100,
  transactionIncome: {
    description: 'Income description',
    amount: 100,
    date: '2023-05-23',
    category: 'Доход',
    _id: '507f1f77bcf86cd799439011',
  },
  incomes: [
    {
      description: 'Income description',
      amount: 100,
      date: '2023-05-23',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439011',
    },
    {
      description: 'Income description',
      amount: 200,
      date: '2023-05-23',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439012',
    },
    {
      description: 'Income description',
      amount: 300,
      date: '2023-05-23',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439013',
    },
    {
      description: 'Income description',
      amount: 400,
      date: '2023-05-23',
      category: 'Доход',
      _id: '507f1f77bcf86cd799439014',
    },
  ],
  monthStatsIncome: {
    Январь: 5,
    Февраль: 100,
    Март: 'N/A',
    Апрель: 15,
    Май: 1,
    Июнь: 'N/A',
    Июль: 3,
    Август: 18,
    Сентябрь: 47,
    Октябрь: 77,
    Ноябрь: 96,
    Декабрь: 123,
  },
  transactionExpense: {
    description: 'Expense description',
    amount: 100,
    date: '2020-12-31',
    category: 'Продукты',
    _id: '507f1f77bcf86cd799439011',
  },
  expenses: [
    {
      description: 'Expense description',
      amount: 100,
      date: '2023-05-23',
      category: 'Продукты',
      _id: '507f1f77bcf86cd799439016',
    },
    {
      description: 'Expense description',
      amount: 50,
      date: '2023-05-23',
      category: 'Продукты',
      _id: '507f1f77bcf86cd799439017',
    },
    {
      description: 'Expense description',
      amount: 60,
      date: '2023-05-23',
      category: 'Продукты',
      _id: '507f1f77bcf86cd799439018',
    },
    {
      description: 'Expense description',
      amount: 80,
      date: '2023-05-23',
      category: 'Продукты',
      _id: '507f1f77bcf86cd799439019',
    },
  ],
  monthStatsExpenses: {
    Январь: 5,
    Февраль: 100,
    Март: 90,
    Апрель: 48,
    Май: 1,
    Июнь: 50,
    Июль: 3,
    Август: 'N/A',
    Сентябрь: 'N/A',
    Октябрь: 77,
    Ноябрь: 'N/A',
    Декабрь: 123,
  },
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
        // TO CHECK below!!!
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
        // TO CHECK below!!!
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
      .addCase(addTransactionIncome.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // TO DO!!!
      })
      .addCase(addTransactionIncome.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================== ADD TRANSACTION EXPENSE
      .addCase(addTransactionExpense.pending, state => {
        state.isLoading = true;
      })
      .addCase(addTransactionExpense.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        // TO DO!!!
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
        state.isLoading = false;
        state.error = null;
        // TO DO!!!
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
        // TO DO!!!
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
