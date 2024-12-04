import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice.jsx";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PURGE,
  REGISTER,
  PAUSE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice, // Ensure the reducer is imported correctly
});

const persistedReducer = persistReducer(persistConfig, rootReducer); // Use persistedReducer here

const store = configureStore({
  reducer: persistedReducer, // Corrected: Use persistedReducer here
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store); // Add persistor to manage rehydration
export default store;
