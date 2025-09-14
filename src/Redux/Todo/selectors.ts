import ReduxRootState from "../../Interfaces/ReduxRootState";
import {Entity} from "../../Models/Entity";

export const todoSelectIsStatusSelected = (state: ReduxRootState) =>
    (status: Entity.Todo.Status): boolean =>
        state.todo.editor.form?.status == status