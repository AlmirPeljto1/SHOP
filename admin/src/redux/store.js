//IMPORTS
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "./productRedux";
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
//PERSIST
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};
//COMBINE ALL REDUCERS
const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
//REDUX EXPORT STORE
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
