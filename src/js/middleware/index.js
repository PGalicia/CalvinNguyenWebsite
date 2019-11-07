import { PRINT_TEXT } from "@actionTypes";

// const FORBIDDEN_WORD = "bleh";

// export const forbiddenWordsMiddleware = ({ getState, dispatch }) => next => action => {
//     switch(action.type) {
//         case PRINT_TEXT:
//             if(action.payload.includes(FORBIDDEN_WORD)) {
//                 alert("This word is not allowed");
//             }
//             break;
//         default:
//             break;
//     }

//     return next(action)
// }