import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DetailCarburant, getAllCarburant } from '../actions/CarburantAction';


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

export const detailCarburantSlice = createSlice({
    name: 'carburantDetail', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(DetailCarburant.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(DetailCarburant.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.carburant = action.payload;
            state.error = null; 
          })
          .addCase(DetailCarburant.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.carburant = null; 
          });
    }
})

const rootReducer = {
    carburantCreate: detailCarburantSlice.reducer,
    carburantGetAll: getAllCarburantSlice.reducer
};
  
  export default rootReducer