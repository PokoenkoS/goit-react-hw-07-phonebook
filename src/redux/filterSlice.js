import { createSlice } from '@reduxjs/toolkit';


const filterInitialState = '';

export const filterSlice = createSlice({
    name:'filter',
    initialState:filterInitialState,
    reducers:{
        filterContact(state,action) {
            return action.payload;
        }
    }
})


export const {filterContact} = filterSlice.actions;
