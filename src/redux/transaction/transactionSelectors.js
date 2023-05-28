// import { createSelector } from '@reduxjs/toolkit';

export const selectTransactionIsLoading = state => state.transaction.isLoading;

export const selectMonthExpenses = state =>
  state.transaction.monthStatsExpenses;

export const selectMonthIncome = state => state.transaction.monthStatsIncome;

export const selectBalance = state => state.auth.balance;

export const selectFilterDate = state => state.transaction.filterDate;

export const selectExpenses = state => state.transaction.expenses;

export const selectIncome = state => state.transaction.incomes;
