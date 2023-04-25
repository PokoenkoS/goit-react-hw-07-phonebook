import { createSlice, isAnyOf } from '@reduxjs/toolkit';

import { fetchContacts, addContact, deleteContact } from './operations';

const handlePending = (state) => {
    state.isLoading=true;
    state.error = null;
}
const handleFulfilled = (state) => {
    state.isLoading= false;
    state.error = null;
}
const handleRejected = (state,{payload}) => {
    state.isLoading= false;
    state.error = payload;
}

const handleFulfilledFetch = (state, {payload}) => {
    state.items= payload;
    
    handleFulfilled(state)
}


const handleFulfilledAdd =(state, {payload}) => {
    state.items.push(payload);
   
    handleFulfilled(state)
}
const handleFullfilledDelete =(state, {payload}) => {
    state.items = state.items.filter(contact => contact.id !== payload);
    
    handleFulfilled(state)
}

export const phoneSlice = createSlice({
    name:'contacts',
    initialState:  {
        items: [],
        isLoading: false,
        error: null
      },
          extraReducers:(builder)=>{
       builder
   
       .addCase(fetchContacts.fulfilled,handleFulfilledFetch)
       .addCase(addContact.fulfilled, handleFulfilledAdd)
       .addCase(deleteContact.fulfilled, handleFullfilledDelete)
       .addMatcher(isAnyOf(
        fetchContacts.pending,
        addContact.pending,
        deleteContact.pending
         ), handlePending)
         .addMatcher(isAnyOf(
            fetchContacts.rejected,
            addContact.rejected,
            deleteContact.rejected
         ), handleRejected)
    
    }
   
})


