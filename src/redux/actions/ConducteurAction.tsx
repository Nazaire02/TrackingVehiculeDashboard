import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getAllConducteur = createAsyncThunk(
    'conducteur/get-all',
    async (conducteurData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_CHAUFFEUR}`, { withCredentials: true, headers: { 'Authorization': `Bearer ${conducteurData}`} });
        console.log('response', response.data)
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const getDetailConducteur = createAsyncThunk(
  'conducteur/get-detail',
  async (conducteurData, { rejectWithValue }) => {
    try {
      const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_DETAIL_CHAUFFEUR}`, conducteurData, { withCredentials: true, headers: { 'Authorization': `Bearer ${conducteurData?.token}`} });
      console.log('response', response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createConducteur = createAsyncThunk(
    'conducteur/create',
    async (conducteurData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.post(`${ApiConstant.BACKEND_API.CREATE_CHAUFFEUR}`, conducteurData, { withCredentials: true, headers: { 'Authorization': `Bearer ${conducteurData?.token}`} });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);

export const deleteConducteur = createAsyncThunk(
    'conducteur/delete',
    async (conducteurData, thunkAPI) => {
      try {
        const response = await AuthRequest.delete(ApiConstant.BACKEND_API.DESTROY_CHAUFFEUR, {
          data: conducteurData,
          withCredentials: true
        });
        return response.data;
      } catch (error: any) {
        return thunkAPI.rejectWithValue(error.response.data);
      }
    }
  );