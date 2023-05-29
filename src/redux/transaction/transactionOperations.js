import { createAsyncThunk } from '@reduxjs/toolkit';
import { errorHandler } from 'redux/error/errorHandler';
import {
  addTransactionExpenseApi,
  getTransactionExpenseApi,
  addTransactionIncomeApi,
  deleteTransactionApi,
  getTransactionIncomeApi,
  updateUserBalanceApi,
  // getUserInfoApi,
} from 'services/kapustaApi';

export const getTransactionIncome = createAsyncThunk(
  'transaction/income/get',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await getTransactionIncomeApi();
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getTransactionIncome }));
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionIncome = createAsyncThunk(
  'transaction/income/add',
  async (transactionForm, { rejectWithValue, dispatch }) => {
    try {
      const { data: newBalance } = await addTransactionIncomeApi(
        transactionForm
      );
      const { data } = await getTransactionIncomeApi();
      return [newBalance, data];
    } catch (error) {
      dispatch(
        errorHandler({ error, cb: () => addTransactionIncome(transactionForm) })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const getTransactionExpense = createAsyncThunk(
  'transaction/expenses/get',
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await getTransactionExpenseApi();
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: getTransactionExpense }));
      return rejectWithValue(error.message);
    }
  }
);

export const addTransactionExpense = createAsyncThunk(
  'transaction/expenses/add',
  async (transactionForm, { rejectWithValue, dispatch }) => {
    try {
      const { data: newBalance } = await addTransactionExpenseApi(
        transactionForm
      );
      const { data } = await getTransactionExpenseApi();
      return [newBalance, data];
    } catch (error) {
      dispatch(
        errorHandler({
          error,
          cb: () => addTransactionExpense(transactionForm),
        })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  'transaction/delete',
  async ([transactionId, expenses], { rejectWithValue, dispatch }) => {
    try {
      await deleteTransactionApi(transactionId);
      const { data } =
        expenses === 'income'
          ? await getTransactionIncomeApi()
          : await getTransactionExpenseApi();
      return data;
    } catch (error) {
      dispatch(
        errorHandler({ error, cb: () => deleteTransaction(transactionId) })
      );
      return rejectWithValue(error.message);
    }
  }
);

export const addBalance = createAsyncThunk(
  'balance/patch',
  async (newBalance, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await updateUserBalanceApi(newBalance);
      return data;
    } catch (error) {
      dispatch(errorHandler({ error, cb: addBalance }));
      return rejectWithValue(error.message);
    }
  }
);

// export const getUserInfo = createAsyncThunk(
//   'balance/get',
//   async (_, { rejectWithValue, dispatch }) => {
//     try {
//       const { data } = await getUserInfoApi();
//       return data;
//     } catch (error) {
//       dispatch(errorHandler({ error, cb: getUserInfo }));
//       return rejectWithValue(error.message);
//     }
//   }
// );
