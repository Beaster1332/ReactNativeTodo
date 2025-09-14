import {Entity} from "../../Models/Entity";

type ReduxTodoListState = {
    todos: Entity.Todo.Todo[];
    isLoading: boolean
}

export type ReduxTodoEditorForm = {
    title: string;
    description: string;
    status: string;
};

export type ReduxTodoEditorError = {
    type: keyof ReduxTodoEditorForm;
    value: string;
}

type ReduxTodoEditorState = {
    form: ReduxTodoEditorForm | null;
    errors: ReduxTodoEditorError[] | null;
    isLoading: boolean
}

type ReduxTodoState = {
    list: ReduxTodoListState;
    editor: ReduxTodoEditorState | null;
}

export default ReduxTodoState