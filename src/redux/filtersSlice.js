import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filters: {
    name: '',
  },
};


const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
export const selectNameFilter = state => state.filters.name;
