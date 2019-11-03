/*
    File: index.js
    Author: Patrick Galicia
    Desc: Base redux file
*/

// Imports
import {
    CHANGE_GREETING
} from "../constants/action-types.js"

// Contains initial state of listed elements
const initialState = {
    greeting: "Hello World"
}

// Root Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_GREETING:
            return { ...state, greeting: action.paylaod }
        default:
            return state;
    }
}

export default rootReducer;