/*
    File: index.js
    Author: Patrick Galicia
    Desc: Base Redux store file
*/

import {
    createStore
} from "redux";

import rootReducer from "@reducer";

const store = createStore(
    rootReducer
);

export default store;