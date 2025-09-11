import {AnyAction} from "redux";

export type ReduxAction = AnyAction & {
    payload?: any
}