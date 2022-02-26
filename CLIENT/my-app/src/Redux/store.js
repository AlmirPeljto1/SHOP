//IMPORT
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
//PERSIST CONFIGURATION
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
//REDUCERS COMBINED
const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });
//PERSISTED REDUCER
const persistedReducer = persistReducer(persistConfig, rootReducer);
//EXPORT PERSISTED STORE
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//EXPORT PERSISTOR
export let persistor = persistStore(store);
