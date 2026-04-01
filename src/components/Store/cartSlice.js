import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{items:[]},
    reducers:{
        addItem: (state, action) => {
            state.items.push(action.payload);
        },

        removeItem: (state) => {
            state.items.pop(action.payload)
        },

        clearItems:(state) => {
            // items.length = 0
            state.items = []
        }
    }
})

//from slice we export two things 1)Action 2)Reducer

//The action
export const {addItem, removeItem, clearItems} = cartSlice.actions;
//The reducer
export default cartSlice.reducer;
