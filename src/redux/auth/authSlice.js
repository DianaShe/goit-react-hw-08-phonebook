import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCurrentUser, logIn, logOut, registerUser } from './operations';
import { handleError, handleFetchCurrentUserFulfilled, handleLogInFulfilled, handleLogOutFulfilled, handleRegisterUserFulfilled } from 'redux/auth/handlers';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    isLoggedIn: false,
    error: null,
    access_token: null,
  },
  extraReducers: builder =>
    builder.addCase(registerUser.fulfilled, handleRegisterUserFulfilled)
    .addCase(logIn.fulfilled, handleLogInFulfilled)
    .addCase(logOut.fulfilled, handleLogOutFulfilled)
    .addCase(fetchCurrentUser.fulfilled, handleFetchCurrentUserFulfilled)
    .addCase(fetchCurrentUser.rejected, handleError)
    .addCase(isAnyOf(registerUser.rejected, logIn.rejected, fetchCurrentUser.rejected, logOut.rejected), handleError)
    ,
});

export const authReducer = authSlice.reducer;
