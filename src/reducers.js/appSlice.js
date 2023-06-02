import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showDesiredOutcome: true,
    score: 0
}

export const appSlice = createSlice({
    name: "appSlice",
    initialState,
    reducers: {
        setShowDesiredOutcome: (state, action) => {
            state.showDesiredOutcome = action.payload;
        },
        incrementScore: (state) => {
            state.score = state.score + 1;
        },
        decrementScore: (state) => {
            state.score = state.score - 1;
        }
    }
})

export const { setShowDesiredOutcome, incrementScore, decrementScore } = appSlice.actions

export default appSlice.reducer