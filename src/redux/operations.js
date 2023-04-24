import { createAsyncThunk } from "@reduxjs/toolkit";
import * as fetchApi from "services/Api";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async()=> {

    try {
        const contacts = await fetchApi.fetchContacts();
        
        return contacts;
      
    }catch(error) {
        console.log(error);
    }
    
});

export const addContact = createAsyncThunk('contacts/addContact', async(contactData)=> {

    try {
        const contacts = await fetchApi.addContact(contactData);
        
        return contacts;
        
      
    }catch(error) {
        console.log(error);
    }
    
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async(data)=> {

    try {
        await fetchApi.deleteContact(data);
        
        return data;
      
    }catch(error) {
        console.log(error);
    }
    
})