import {
    createStore,
    applyMiddleware,
    compose
} from "redux";
// import { forbiddenWordsMiddleware } from "../middleware/index.js.js.js";
// import rootReducer from "./../reducers/index.js";
import rootReducer from "@reducer";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    // storeEnhancers(applyMiddleware(forbiddenWordsMiddleware))
);

export default store;