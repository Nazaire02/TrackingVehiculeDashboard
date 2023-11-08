import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createConduire, getAllConduire } from '../actions/ConduireAction';


interface conduireState {
    conduire: null | any;
    loading: boolean;
    error: null | any;
}

const initialState: conduireState = {
    conduire: null,
    loading: false,
    error: null,
};

export const getAllConduireSlice = createSlice({
  name: 'conduireGetAll', 
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
        .addCase(getAllConduire.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(getAllConduire.fulfilled, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.conduire = action.payload;
          state.error = null; 
        })
        .addCase(getAllConduire.rejected, (state, action: PayloadAction<any>) => {
          state.loading = false;
          state.error = action.payload;
          state.conduire = null; 
        });
  }
})



export const createConduireSlice = createSlice({
    name: 'conduireCreate', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(createConduire.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(createConduire.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.conduire = action.payload;
            state.error = null; 
          })
          .addCase(createConduire.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.conduire = null; 
          });
    }
})

const rootReducer = {
    conduireCreate: createConduireSlice.reducer,
    conduireGetAll: getAllConduireSlice.reducer
};
  
  export default rootReducer