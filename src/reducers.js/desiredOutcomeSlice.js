import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    gridIds: [9, 10, 11, 12, 13, 14, 15, 16, 17],
    ACTIVE_COLOR: 'yellow',
    INACTIVE_COLOR: 'grey',
    activities: [0, 1, 0, 1, 0, 1, 1, 1, 0] 
}

export const desiredOutcomeSlice = createSlice({
    name: "desiredOutcomeSlice",
    initialState,
    reducers: {
        randomizeActivities: (state) => {
            var newActivities = []
            for (let i = 0; i < 9; i++) {
                newActivities = [...newActivities, Math.round(Math.random())]
            }
            state.activities = [...newActivities]
        },

        setColors: (state) => {
            state.gridIds.forEach(id => {
                const gridItem = document.getElementById(id);
                gridItem.style.backgroundColor = state.activities[id-9] ? 
                    state.ACTIVE_COLOR : 
                    state.INACTIVE_COLOR
            })
        }
    }
})

export const { randomizeActivities, setColors } = desiredOutcomeSlice.actions

export default desiredOutcomeSlice.reducer
