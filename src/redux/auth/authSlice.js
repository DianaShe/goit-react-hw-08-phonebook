import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, registerUser } from './operations';
import { handleError, handleFetchCurrentUserFulfilled, handleLogInFulfilled, handleLogOutFulfilled, handlePending, handleRegisterUserFulfilled } from 'redux/auth/handlers';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    error: null,
    access_token: null,
    authInProgress: false,
  },
  extraReducers: builder =>
    builder.addCase(registerUser.fulfilled, handleRegisterUserFulfilled)
    .addCase(logIn.fulfilled, handleLogInFulfilled)
    .addCase(logOut.fulfilled, handleLogOutFulfilled)
    .addCase(fetchCurrentUser.fulfilled, handleFetchCurrentUserFulfilled)
    .addCase(fetchCurrentUser.rejected, handleError)
    .addMatcher(isAnyOf(registerUser.rejected, logIn.rejected, fetchCurrentUser.rejected, logOut.rejected), handleError)
    .addMatcher(isAnyOf(registerUser.pending, logIn.pending, fetchCurrentUser.pending, logOut.pending), handlePending)
    ,
});

export const authReducer = authSlice.reducer;
