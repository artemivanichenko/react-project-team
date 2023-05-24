import { createSelector } from '@reduxjs/toolkit';

export const selectIncomesTotal = state => state.incomes.total;
export const selectExpensesTotal = state => state.expenses.total;
