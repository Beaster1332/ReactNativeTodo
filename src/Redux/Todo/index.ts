import { ReduxAction } from "../../Interfaces";
import ReduxTodoState from "./interface";
import ReduxTodoReceiver from "./receiver";
import {
	TODO_EDITOR_CLOSE_FORM,
	TODO_EDITOR_SET_FORM,
	TODO_EDITOR_SET_TODO,
	TODO_LIST_CREATE_NEW,
	TODO_LIST_DELETE_TODO,
	TODO_LIST_UPDATE_TODO,
} from "./types";

const initialState: ReduxTodoState = {
	list: {
		todos: [],
		isLoading: false,
	},
	editor: null,
};

export const todoReducer = (
	state: ReduxTodoState = initialState,
	action: ReduxAction,
) => {
	switch (action.type) {
		// Editor

		case TODO_EDITOR_SET_FORM:
			return ReduxTodoReceiver.todoEditorSetForm(state, action.payload);

		case TODO_EDITOR_SET_TODO:
			return ReduxTodoReceiver.todoEditorSetTodo(state, action.payload);

		case TODO_EDITOR_CLOSE_FORM:
			return ReduxTodoReceiver.todoEditorCloseForm(state);

		// List

		case TODO_LIST_CREATE_NEW:
			return ReduxTodoReceiver.todoListCreateNew(state, action.payload);

		case TODO_LIST_UPDATE_TODO:
			return ReduxTodoReceiver.todoListUpdateTodo(state, action.payload);

		case TODO_LIST_DELETE_TODO:
			return ReduxTodoReceiver.todoListDeleteTodo(state, action.payload);

		default:
			return state;
	}
};