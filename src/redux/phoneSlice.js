import { createSlice } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';


export const phoneSlice = createSlice({
    name:'contacts',
    initialState:  {
        items: [],
        isLoading: false,
        error: null
      },
    extraReducers:{
       
        [fetchContacts.pending]:(state, action)=> {
            state.isLoading= true;
            state.error = null;

        },
        [fetchContacts.fulfilled]:(state, action)=> {
            state.items= action.payload;
            state.isLoading= false;
            state.error = null;

        },
        [fetchContacts.rejected]:(state, action)=> {
           
            state.isLoading= false;
            state.error = action.payload;

        },
        [addContact.pending]:(state, action)=> {
            state.isLoading= true;
            state.error = null;

        },
        [addContact.fulfilled]:(state, action)=> {
            state.items.push(action.payload);
            state.isLoading= false;
            state.error = null;

        },
        [addContact.rejected]:(state, action)=> {
           
            state.isLoading= false;
            state.error = action.payload;

        },

        [deleteContact.pending]:(state, action)=> {
            state.isLoading= true;
            state.error = null;

        },
        [deleteContact.fulfilled]:(state, action)=> {
          
            state.items = state.items.filter(contact => contact.id !== action.payload);
            state.isLoading= false;
            state.error = null;

        },
        [deleteContact.rejected]:(state, action)=> {
           
            state.isLoading= false;
            state.error = action.payload;

        },

    }
   
})


