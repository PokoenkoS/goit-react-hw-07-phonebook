import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactInitialState = [];

export const phoneSlice = createSlice({
    name:'phonebook',
    initialState: contactInitialState,
    reducers:{
        addContact(state,action) {
            state.push(action.payload);
        },
        prepare({ name, number }) {
            return { payload: { name, number, id: nanoid() } };
          },
        deleteContact(state,action) {
           
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        }
    }
})

export const {addContact, deleteContact} = phoneSlice.actions;
export const contactsReducer = phoneSlice.reducer;
