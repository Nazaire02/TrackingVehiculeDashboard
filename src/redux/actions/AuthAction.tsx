import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';


export const loginAdmin = createAsyncThunk(
  'admin/login',
  async (adminData, { rejectWithValue }) => {
    try {
      const response = await AuthRequest.post(`${ApiConstant.BACKEND_API.LOGIN}`, adminData, { withCredentials: true });
      console.log('adminData', response.data)
      return response.data;
    } catch (error: any) {
      console.log('adminData error', error.response.data)
      return rejectWithValue(error.response.data);
    }
  }
);

export const logoutAdmin = createAsyncThunk(
  'admin/logout',
  async (adminData, { rejectWithValue }) => {
    console.log('userDate', adminData)
    try {
      const response = await AuthRequest.get(`${ApiConstant.BACKEND_API.LOGOUT}`, { withCredentials: true , headers: { 'Authorization': `Bearer ${adminData}`} });
      console.log('reponse', response.data)
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
)