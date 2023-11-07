import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createVehicule, deleteVehicule, getAllVehicule } from '../actions/VehiculeAction';


interface VehiculeState {
    vehicule: null | any;
    loading: boolean;
    error: null | any;
}

const initialState: VehiculeState = {
    vehicule: null,
    loading: false,
    error: null,
};

export const getAllVehiculeSlice = createSlice({
    name: 'vehiculeGetAll', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(getAllVehicule.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getAllVehicule.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.vehicule = action.payload;
            state.error = null; 
          })
          .addCase(getAllVehicule.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.vehicule = null; 
          });
    }
})

export const createVehiculeSlice = createSlice({
    name: 'vehiculeCreate', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(createVehicule.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(createVehicule.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.vehicule = action.payload;
            state.error = null; 
          })
          .addCase(createVehicule.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.vehicule = null; 
          });
    }
})

export const deleteVehiculeSlice = createSlice({
    name: 'VehiculeDelete', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(deleteVehicule.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(deleteVehicule.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.vehicule = action.payload;
            state.error = null; 
          })
          .addCase(deleteVehicule.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.vehicule = null; 
          });
    }
})

const rootReducer = {
    vehiculeCreate: createVehiculeSlice.reducer,
    vehiculeGetAll: getAllVehiculeSlice.reducer,
    vehiculeDelete: deleteVehiculeSlice.reducer
};
  
  export default rootReducer