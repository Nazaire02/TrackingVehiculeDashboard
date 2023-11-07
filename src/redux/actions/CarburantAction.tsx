import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getAllCarburant = createAsyncThunk(
    'carburant/get-all',
    async ({ rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_CARBURANT}`, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const DetailCarburant = createAsyncThunk(
    'carburant/detail',
    async ({ rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.DETAIL_CARBURANT}`, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);