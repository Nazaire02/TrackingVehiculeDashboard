
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginAdmin, logoutAdmin } from '../actions/AuthAction';

interface adminState {
  admin: null | any;
  loading: boolean;
  error: null | any;
}

const initialState: adminState = {
  admin: null,
  loading: false,
  error: null,
};

export const loginSlice = createSlice({
  name: 'adminLogin', 
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(loginAdmin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(loginAdmin.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.admin = action.payload;
          state.error = null; 
        })
        .addCase(loginAdmin.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.admin = null; 
        });
  }
})

export const logoutSlice = createSlice({
  name: 'adminLogout', 
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(logoutAdmin.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(logoutAdmin.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.admin = action.payload;
          state.error = null; 
        })
        .addCase(logoutAdmin.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.admin = null; 
        });
  }
})
  
  
const rootReducer = {
  adminLogin: loginSlice.reducer,
  adminLogout: logoutSlice.reducer
};

export default rootReducer