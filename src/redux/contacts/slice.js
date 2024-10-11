import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import { logOut } from '../auth/operations';


const initialState = {
  items: [],
  filters: {
    name: ' ',
  },
  loading: false,
  error: null,
};

export const slice = createSlice({
  name: "contacts",
  initialState,
  extraReducers: (builder) => {
    builder
    .addCase(fetchContacts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loading = false;
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(addContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(addContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items.push(action.payload);
    })
    .addCase(addContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(deleteContact.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(deleteContact.fulfilled, (state, action) => {
      state.loading = false;
      state.items = state.items.filter((item) => item.id !== action.payload);
    })
    .addCase(deleteContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase(logOut.fulfilled, () => {
      return initialState;
    })
  },
});

export const contactsReducer = slice.reducer;
