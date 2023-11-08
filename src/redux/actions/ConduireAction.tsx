import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const getAllConduire = createAsyncThunk(
  'conduire/get-all',
  async (conduireData, { rejectWithValue }) => {
    try {
      console.log('token', conduireData)
      const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.GET_ALL_CONDUIRE}`, { withCredentials: true, headers: { 'Authorization': `Bearer ${conduireData}`} });
      console.log('response', response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createConduire = createAsyncThunk(
    'conduire/create',
    async (conduireData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.post(`${ApiConstant.BACKEND_API.CREATE_CONDUIRE}`, conduireData, { withCredentials: true, headers: { 'Authorization': `Bearer ${conduireData?.token}`} });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);