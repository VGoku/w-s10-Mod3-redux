import { createSlice } from "@reduxjs/toolkit";

let id = 1
const getNextId = () => id++

export const todoSlice = createSlice({
    name: "todos",
    initialState: {
        todos: [ // TODO: this must come from app state!
            { id: getNextId(), label: 'Laundry', complete: true },
            { id: getNextId(), label: 'Groceries', complete: false },
            { id: getNextId(), label: 'Dishes', complete: false },
        ],
        showCompletedTodos: true,// (((11:14)))
    },
    reducers: {
        toggleshowCompletedTodos: state => {
            return { ...state, showCompletedTodos: !state.showCompletedTodos }
        }
    }
});

export default todoSlice.reducer