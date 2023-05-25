// import { createSelector } from '@reduxjs/toolkit';

export const selectTransactionIsLoading = state => state.transaction.isLoading;

export const selectMonthExpenses = state =>
  state.transaction.monthStatsExpenses;

export const selectMonthIncome = state => state.transaction.monthStatsIncome;
