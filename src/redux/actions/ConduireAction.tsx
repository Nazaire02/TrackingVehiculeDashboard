import AuthRequest from '../../helpers/Fetch';
import { createAsyncThunk } from '@reduxjs/toolkit';
import ApiConstant from '../../constants/ApiConstant';

export const createConduire = createAsyncThunk(
    'conduire/create',
    async (conducteurData, { rejectWithValue }) => {
      try {
        const response = await AuthRequest.post(`${ApiConstant.BACKEND_API.CREATE_CONDUIRE}`, conducteurData, { withCredentials: true });
        return response.data;
      } catch (error: any) {
        return rejectWithValue(error.response.data);
      }
    }
);