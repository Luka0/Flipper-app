import { configureStore } from "@reduxjs/toolkit";
import gridReducer from "../reducers.js/gridSlice";
import desiredOutcomeReducer from "../reducers.js/desiredOutcomeSlice";
import appReducer from "../reducers.js/appSlice";


export const store = configureStore({
    reducer: {
        gridReducer: gridReducer,
        desiredOutcomeReducer: desiredOutcomeReducer,
        appReducer: appReducer
    }
});