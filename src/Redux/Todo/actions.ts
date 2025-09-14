import {
    TODO_EDITOR_CLOSE_FORM,
    TODO_EDITOR_SET_FORM,
    TODO_LIST_CREATE_NEW,
    TODO_LIST_UPDATE_TODO
} from "./types";
import {ReduxAction} from "../../Interfaces";
import {ReduxTodoEditorForm} from "./interface";

// Editor

export const todoEditorSetForm = (payload: ReduxTodoEditorForm): ReduxAction => ({
    type: TODO_EDITOR_SET_FORM,
    payload
});

export const todoEditorCloseForm = (): ReduxAction => ({
    type: TODO_EDITOR_CLOSE_FORM,
});

// List

export const todoListCreateNew = (payload: ReduxTodoEditorForm): ReduxAction => ({
    type: TODO_LIST_CREATE_NEW,
    payload
});

export const todoListUpdateTodo = (payload: ReduxTodoEditorForm): ReduxAction => ({
    type: TODO_LIST_UPDATE_TODO,
    payload
});