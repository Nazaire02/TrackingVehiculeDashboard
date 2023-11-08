import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getHome } from '../actions/HomeAction';

interface homeState {
    home: null | any;
    loading: boolean;
    error: null | any;
}

const initialState: homeState = {
    home: null,
    loading: false,
    error: null,
};

export const getHomeSlice = createSlice({
    name: 'home', 
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
          .addCase(getHome.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getHome.fulfilled, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.home = action.payload;
            state.error = null; 
          })
          .addCase(getHome.rejected, (state, action: PayloadAction<any>) => {
            state.loading = false;
            state.error = action.payload;
            state.home = null; 
          });
    }
})

const rootReducer = {
    home: getHomeSlice.reducer,
};
  
  export default rootReducer