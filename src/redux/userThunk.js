
import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

const API_URL = 'https://localhost:7095/api/Users';

// const API_URL = 'http://localhost:5200/api/Users';
// const API_URL = 'https://localhost:5180/api/Users';




export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(`${API_URL}`, userData);
      localStorage.setItem('user', JSON.stringify(response.data));
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/login',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/search`, {
        params: { name, phone },
      });

      if (!response.data) {
        return rejectWithValue("User not found");
      }

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || 'Login failed');
    }
  }
);




