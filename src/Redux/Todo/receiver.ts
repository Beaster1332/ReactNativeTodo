import ReduxTodoState, {ReduxTodoEditorForm} from "./interface";
import {Entity} from "../../Models/Entity";
import {v4 as uuidV4} from "uuid";

namespace ReduxTodoReceiver {
    // Editor

    export const todoEditorSetForm = (
        state: ReduxTodoState,
        form: ReduxTodoEditorForm
    ): ReduxTodoState => ({
        ...state,
        editor: {
            ...state.editor,
            form
        }
    });

    export const todoEditorCloseEditorDialog = (state: ReduxTodoState): ReduxTodoState => ({
        ...state,
        editor: {
            ...state.editor,
            form: null
        }
    });

    // List

    export const todoListCreateNew = (state: ReduxTodoState, form: ReduxTodoEditorForm): ReduxTodoState => ({
        ...state,
        list: {
            todos: [
                ...state.list.todos,
                {
                    id: uuidV4(),
                    title: form.title,
                    description: form.description,
                    status: form.status
                } as Entity.Todo.Todo
            ],
            isLoading: false,
        },
        editor: {
            ...state.editor,
            form: null
        }
    });

    export const todoListUpdateTodo = (state: ReduxTodoState, form: ReduxTodoEditorForm): ReduxTodoState => ({
        ...state,
        list: {
            todos: [
                ...state.list.todos,
                {
                    id: uuidV4(),
                    title: form.title,
                    description: form.description,
                    status: form.status
                } as Entity.Todo.Todo
            ],
            isLoading: false,
        },
        editor: {
            ...state.editor,
            form: null
        }
    });
}

export default ReduxTodoReceiver