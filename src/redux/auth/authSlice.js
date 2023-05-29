import { createSlice } from '@reduxjs/toolkit';
import {
  getAuthUser,
  loginUser,
  logoutUser,
  refreshToken,
  registerUser,
} from './authOperations';
import {
  addBalance,
  addTransactionExpense,
  addTransactionIncome,
} from 'redux/transaction/transactionOperations';

const initialState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  email: null,
  error: null,
  isLoading: false,
  isAuth: false,
  balance: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    googleAuth(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  extraReducers: builder => {
    builder
      // ============== REGISTRATION ====================
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        return {
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ LOGIN =========================
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        loginUser.fulfilled,
        (state, { payload: { userData, ...payload } }) => {
          return {
            ...state,
            isAuth: true,
            isLoading: false,
            error: null,
            ...payload,
            email: userData.email,
          };
        }
      )
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ LOGOUT ========================
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, state => {
        return {
          ...initialState,
        };
      })
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ GET AUTHORIZED USER =====================
      .addCase(getAuthUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAuthUser.fulfilled, (state, { payload }) => {
        return {
          ...state,
          isAuth: true,
          isLoading: false,
          error: null,
          ...payload,
        };
      })
      .addCase(getAuthUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ REFRESH TOKEN =====================
      .addCase(refreshToken.pending, state => {
        state.isLoading = true;
      })
      .addCase(refreshToken.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.accessToken = payload.newAccessToken;
        state.refreshToken = payload.newRefreshToken;
        state.sid = payload.newSid;
      })
      .addCase(refreshToken.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // ================ ADD BALANCE ====================
      .addCase(addBalance.fulfilled, (state, { payload }) => {
        state.balance = payload.newBalance;
      })
      // ================ ADD TRANSACTION EXPENSE ===========
      .addCase(addTransactionExpense.fulfilled, (state, { payload }) => {
        state.balance = payload[0].newBalance;
      })
      // =============== ADD TRANSACTION INCOME ============
      .addCase(addTransactionIncome.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.balance = payload[0].newBalance;
      });
  },
});

export const { googleAuth } = authSlice.actions;
export default authSlice.reducer;
