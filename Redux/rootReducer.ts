import {combineReducers} from "redux";
import {todoReducer} from "./Todo";

export const rootReducer = combineReducers({
    todo: todoReducer
})