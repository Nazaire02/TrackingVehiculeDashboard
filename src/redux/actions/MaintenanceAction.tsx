import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getAllMaintenance = createAsyncThunk(
    'maintenance/get-all',
    async (maintenaceData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_MAINTENANCE}`, { withCredentials: true, headers: { 'Authorization': `Bearer ${maintenaceData}`} });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const RechercheMaintenance = createAsyncThunk(
    'maintenance/recherche',
    async (maintenaceData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.post(`${ApiConstant.BACKEND_API.RECHERCHE_MAINTENANCE}`, maintenaceData, { withCredentials: true, headers: { 'Authorization': `Bearer ${maintenaceData?.token}`} });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);