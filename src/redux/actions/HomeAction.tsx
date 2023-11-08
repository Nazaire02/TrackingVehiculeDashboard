import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getHome = createAsyncThunk(
    'carburant/get-all',
    async (_, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_CARBURANT}`, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);