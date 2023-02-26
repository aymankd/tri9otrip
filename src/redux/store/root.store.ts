import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { TripsState, tripReducer } from "../reducers";

export interface RootStore {
  trips: TripsState;
}

function createRootStore() {
  const sagaMiddleware = createSagaMiddleware();
  const rootReducer = combineReducers({
    trips: tripReducer,
  });
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([sagaMiddleware]),
    devTools: process.env.NODE_ENV !== "production",
  });
  return store;
}
export default createRootStore;
