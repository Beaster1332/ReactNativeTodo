import {Entity} from "../../Models/Entity";

type ReduxTodoListState = {
    todos: Entity.Todo.Todo[];
    isLoading: boolean
}

export type ReduxTodoEditorForm = {
    title: string;
    description: string;
    status: string;
}

type ReduxTodoEditorState = {
    form: ReduxTodoEditorForm | null;
    isLoading: boolean
}

type ReduxTodoState = {
    list: ReduxTodoListState;
    editor: ReduxTodoEditorState | null;
}

export default ReduxTodoState