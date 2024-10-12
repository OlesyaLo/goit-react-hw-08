import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.items;

export const selecIstLoading = (state) => state.contacts.loading;

export const selecIstError = (state) => state.contacts.error;

export const selectVisibleContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, nameFilter) => {
      const formattedFilterName = nameFilter ? nameFilter.toLowerCase() : '';
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(formattedFilterName) || 
      contact.number.includes(nameFilter)
      );
    }
  );