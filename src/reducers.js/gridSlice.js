import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    gridIds: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    ACTIVE_COLOR: 'green',
    INACTIVE_COLOR: 'grey',
    activities: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}

export const gridSlice = createSlice({
    name: "gridSlice",
    initialState,
    reducers: {

        toggleActivitiy: (state, action) => {
            const newActivities = [...state.activities]
            if(newActivities[action.payload] === 1){
                newActivities[action.payload] = 0;
            }
            else{
                newActivities[action.payload] = 1;
            }
            state.activities = [...newActivities]

            const item = document.getElementById(action.payload);

            if(item.style.backgroundColor === state.INACTIVE_COLOR){
                item.style.backgroundColor = state.ACTIVE_COLOR;
            } else{
                item.style.backgroundColor = state.INACTIVE_COLOR;
            }
        },

        resetGridActivities: (state) => {
            state.activities = [0,0,0,0,0,0,0,0,0];
        },

        // it doesnt work if you set the initial color via css because it saves it as rgb()
        // and we need it as a string ('grey', 'green'...)
        setInactiveColor: (state) => {
            state.gridIds.forEach(id => {
                const gridItem = document.getElementById(id);
                gridItem.style.backgroundColor = state.INACTIVE_COLOR;
            })
        }
    }
})

export const { toggleActivitiy, setInactiveColor, resetGridActivities } = gridSlice.actions

export default gridSlice.reducer