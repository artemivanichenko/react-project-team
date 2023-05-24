import { createSlice } from '@reduxjs/toolkit';
import {
  getTransactionIncomeCategories,
  getTransactionExpenseCategories,
  getTransactionPeriod,
} from './reportsOperations';

const initialState = {
  isLoading: false,
  error: null,
  incomeCategories: ['З/П', 'Доп. доход'],
  expenseCategories: [
    'Продукты',
    'Алкоголь',
    'Развлечения',
    'Здоровье',
    'Транспорт',
    'Всё для дома',
    'Техника',
    'Коммуналка и связь',
    'Спорт и хобби',
    'Образование',
    'Прочее',
  ],
  incomes: {
    incomeTotal: 12000,
    incomesData: {
      'З/П': {
        total: 12000,
        Аванс: 5000,
        Основная: 7000,
      },
    },
  },
  expenses: {
    expenseTotal: 5200,
    expensesData: {
      Транспорт: {
        total: 4000,
        СТО: 3500,
        Мойка: 500,
      },
      'Всё для дома': {
        total: 1200,
        Вазон: 150,
        'Шкаф-купе': 1050,
      },
    },
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
