import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getAllMaintenance = createAsyncThunk(
    'maintenance/get-all',
    async (_, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_MAINTENANCE}`, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const DetailMaintenance = createAsyncThunk(
    'maintenance/detail',
    async ({ rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.DETAIL_MAINTENANCE}`, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);