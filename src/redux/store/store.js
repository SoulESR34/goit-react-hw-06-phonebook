import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist'
import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from '../slices/contactsSlice';
import filterReducer from '../slices/filterSlice';
import storage from 'redux-persist/lib/storage'


export const persistConfig = {
  key: "root",
  version: 1,
  storage
}

export const reducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
})

export const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});
