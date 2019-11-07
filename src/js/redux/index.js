import { PRINT_TEXT } from "@actionTypes";

// Actions
export const printText = text => ({ type: PRINT_TEXT, payload: text });

// Reducers
// Contains initial state of listed elements
const initialState = {
    printedText: "Hello World"
}

// Root Reducer
const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case PRINT_TEXT:
            return { ...state, printedText: action.payload }
        default:
            return state;
    }
}

export default rootReducer;
