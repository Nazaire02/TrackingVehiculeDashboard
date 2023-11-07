import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DetailMaintenance, getAllMaintenance } from '../actions/MaintenanceAction';


interface MaintenanceState {
    maintenance: null | any;
    loading: boolean;
    error: null | any;
}

const initialState: MaintenanceState = {
    maintenance: null,
    loading: false,
    error: null,
};

export const getAllMaintenanceSlice = createSlice({
    name: 'maintenanceGetAll', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(getAllMaintenance.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getAllMaintenance.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.maintenance = action.payload;
            state.error = null; 
          })
          .addCase(getAllMaintenance.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.maintenance = null; 
          });
    }
})

export const detailMaintenanceSlice = createSlice({
    name: 'maintenanceDetail', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(DetailMaintenance.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(DetailMaintenance.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.maintenance = action.payload;
            state.error = null; 
          })
          .addCase(DetailMaintenance.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.maintenance = null; 
          });
    }
})

const rootReducer = {
    MaintenanceCreate: detailMaintenanceSlice.reducer,
    MaintenanceGetAll: getAllMaintenanceSlice.reducer
};
  
  export default rootReducer