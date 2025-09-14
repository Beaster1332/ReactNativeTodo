import "react-native-get-random-values";
import {v4 as uuidV4} from "uuid";
import {Entity} from "../../Models/Entity";
import {validateTodoForm} from "../../Utils/validations";
import ReduxTodoState, {ReduxTodoEditorForm} from "./interface";

namespace ReduxTodoReceiver {
    // Editor

    export const todoEditorSetForm = (
        state: ReduxTodoState,
        form: ReduxTodoEditorForm
    ): ReduxTodoState => (
        {
            ...state,
            editor: {
                ...state.editor,
                form
            }
        }
    );

    export const todoEditorSetTodo = (
        state: ReduxTodoState,
        todo: Entity.Todo.Todo
    ): ReduxTodoState => (
        {
            ...state,
            editor: {
                ...state.editor,
                todo
            }
        }
    );

    export const todoEditorCloseForm = (
        state: ReduxTodoState
    ): ReduxTodoState => (
        {
            ...state,
            editor: null
        }
    );

    // List

    export const todoListCreateNew = (
        state: ReduxTodoState,
        form: ReduxTodoEditorForm
    ): ReduxTodoState => {
        const errors = validateTodoForm(form);

        if (Boolean(errors.length)) {
            return {
                ...state,
                editor: {
                    ...state.editor,
                    errors
                }
            };
        }

        return {
            ...state,
            list: {
                ...state.list,
                todos: [
                    ...state.list.todos,
                    {
                        id: uuidV4(),
                        title: form.title,
                        description: form.description,
                        status: form.status
                    } as Entity.Todo.Todo
                ]
            },
            editor: {
                ...state.editor,
                form: null,
                errors: null
            }
        };
    };

    export const todoListUpdateTodo = (
        state: ReduxTodoState,
        todo: Entity.Todo.Todo
    ): ReduxTodoState => (
        {
            ...state,
            list: {
                // todos: , todo:: сделать поиск нужной тудушки и ее изменение
                isLoading: false
            },
            editor: {
                ...state.editor,
                form: null,
                todo: null
            }
        }
    );
}

export default ReduxTodoReceiver;