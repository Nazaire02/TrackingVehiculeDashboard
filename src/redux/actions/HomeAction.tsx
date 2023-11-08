import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getHome = createAsyncThunk(
    'home/home',
    async (homeData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.HOME}`, { withCredentials: true, headers: { 'Authorization': `Bearer ${homeData}`} });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);