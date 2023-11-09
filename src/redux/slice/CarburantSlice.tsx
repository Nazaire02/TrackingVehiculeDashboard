import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCarburant, RechercheCarburant } from '../actions/CarburantAction';


interface carburantState {
    carburant: null | any;
    loading: boolean;
    error: null | any;
}

const initialState: carburantState = {
    carburant: null,
    loading: false,
    error: null,
};

export const getAllCarburantSlice = createSlice({
    name: 'carburantGetAll', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(getAllCarburant.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getAllCarburant.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.carburant = action.payload;
            state.error = null; 
          })
          .addCase(getAllCarburant.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.carburant = null; 
          });
    }
})

export const rechercheCarburantSlice = createSlice({
    name: 'carburantRecherche', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(RechercheCarburant.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(RechercheCarburant.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.carburant = action.payload;
            state.error = null; 
          })
          .addCase(RechercheCarburant.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.carburant = null; 
          });
    }
})

const rootReducer = {
    carburantRecherche: rechercheCarburantSlice.reducer,
    carburantGetAll: getAllCarburantSlice.reducer
};
  
  export default rootReducer