import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';


axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';



export const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}

const clearAuthHeader =() => {
    axios.defaults.headers.common.Authorization = ''
}

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (user, thunkAPI) => {
        try {
            const response = await axios.post('users/signup', user);
            setAuthHeader(response.data.token)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
      }
);

export const logIn = createAsyncThunk(
    'auth/logIn',
    async (credencials, thunkAPI) => {
        try {
            const response = await axios.post('users/login', credencials);
            setAuthHeader(response.data.token)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
      } 
);

export const logOut = createAsyncThunk(
    'auth/logOut',
    async (token, thunkAPI) => {
        try {
            const response = await axios.post('users/logout', token);
            clearAuthHeader()
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
      } 
);

export const fetchCurrentUser = createAsyncThunk(
    'auth/fetchCurrentUser',
    async (token, thunkAPI) => {
        try {
            const response = await axios.get('users/current', token);
            setAuthHeader(token)
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
      } 
);

