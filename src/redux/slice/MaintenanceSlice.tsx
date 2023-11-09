import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RechercheMaintenance, getAllMaintenance } from '../actions/MaintenanceAction';


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

export const RechercheMaintenanceSlice = createSlice({
    name: 'maintenanceDetail', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(RechercheMaintenance.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(RechercheMaintenance.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.maintenance = action.payload;
            state.error = null; 
          })
          .addCase(RechercheMaintenance.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.maintenance = null; 
          });
    }
})

const rootReducer = {
    MaintenanceRecherche: RechercheMaintenanceSlice.reducer,
    MaintenanceGetAll: getAllMaintenanceSlice.reducer
};
  
  export default rootReducer