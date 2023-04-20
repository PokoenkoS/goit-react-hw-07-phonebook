import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './phoneSlice';
import { filterReducer } from './filterSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const persistConfig = {
    key: 'contact',
    storage,
    blacklist:['filter']
  };
  
  const contactReducer = combineReducers({
       contacts: contactsReducer,
       filter: filterReducer
     
    });

  const persistedReducer = persistReducer(persistConfig, contactReducer);

    export const store = configureStore({
        reducer:persistedReducer,
     middleware(getDefaultMiddleware) {
          return getDefaultMiddleware({
            serializableCheck: {
              ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
         })
    }  
     
     })

     export const persistor = persistStore(store);