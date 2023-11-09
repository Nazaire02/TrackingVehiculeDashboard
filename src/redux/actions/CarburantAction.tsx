import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getAllCarburant = createAsyncThunk(
    'carburant/get-all',
    async (carburantData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_CARBURANT}`, { withCredentials: true, headers: { 'Authorization': `Bearer ${carburantData}`} });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const RechercheCarburant = createAsyncThunk(
    'carburant/recherche',
    async (carburantData, { rejectWithValue }) => {
      console.log('carburant data', carburantData)
      try {
        const response = await AuthRequest.post(`${ApiConstant.BACKEND_API.RECHERCHE_CARBURANT}`, carburantData, { withCredentials: true, headers: { 'Authorization': `Bearer ${carburantData?.token}`} });
        console.log('ok')
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);