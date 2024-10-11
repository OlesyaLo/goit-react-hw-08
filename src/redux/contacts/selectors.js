import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/selectors';

export const selectContacts = (state) => state.contacts.contacts.items;

export const selectLoading = (state) => state.contacts.contacts.loading;

export const selectError = (state) => state.contacts.contacts.error;

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