import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getAllVehicule = createAsyncThunk(
    'vehicule/get-all',
    async ({ rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_CHAUFFEUR}`, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const createVehicule = createAsyncThunk(
    'ehicule/create',
    async (vehiculeData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.post(`${ApiConstant.BACKEND_API.CREATE_CHAUFFEUR}`, vehiculeData, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const deleteVehicule = createAsyncThunk(
    'vehicule/delete',
    async (vehiculeData, thunkAPI) => {
      try {
        const response = await AuthRequest.delete(ApiConstant.BACKEND_API.DESTROY_CHAUFFEUR, {
          data: vehiculeData,
          withCredentials: true
        });
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );