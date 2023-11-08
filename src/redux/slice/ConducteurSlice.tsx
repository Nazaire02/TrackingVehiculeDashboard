import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createConducteur, deleteConducteur, getAllConducteur, getDetailConducteur } from '../actions/ConducteurAction';


interface conducteurState {
    conducteur: null | any;
    loading: boolean;
    error: null | any;
}

const initialState: conducteurState = {
    conducteur: null,
    loading: false,
    error: null,
};

export const getAllConducteurSlice = createSlice({
    name: 'conducteurGetAll', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(getAllConducteur.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getAllConducteur.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.conducteur = action.payload;
            state.error = null; 
          })
          .addCase(getAllConducteur.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.conducteur = null; 
          });
    }
})

export const getDetailConducteurSlice = createSlice({
  name: 'conducteurGetDetail', 
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getDetailConducteur.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getDetailConducteur.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.conducteur = action.payload;
          state.error = null; 
        })
        .addCase(getDetailConducteur.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.conducteur = null; 
        });
  }
})

export const createConducteurSlice = createSlice({
    name: 'conducteurCreate', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(createConducteur.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(createConducteur.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.conducteur = action.payload;
            state.error = null; 
          })
          .addCase(createConducteur.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.conducteur = null; 
          });
    }
})

export const deleteConducteurSlice = createSlice({
    name: 'conducteurDelete', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(deleteConducteur.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(deleteConducteur.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.conducteur = action.payload;
            state.error = null; 
          })
          .addCase(deleteConducteur.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.conducteur = null; 
          });
    }
})

const rootReducer = {
    conducteurCreate: createConducteurSlice.reducer,
    conducteurGetAll: getAllConducteurSlice.reducer,
    conducteurDelete: deleteConducteurSlice.reducer,
    conducteurGetDetail: getDetailConducteurSlice.reducer
};
  
  export default rootReducer