import {
	ReduxTodoEditorError,
	ReduxTodoEditorForm
} from "../Redux/Todo/interface";

export const validateTodoForm = (form: ReduxTodoEditorForm): ReduxTodoEditorError[] => {
	const errors = [];

	if (!Boolean(form.title.length)) {
		errors.push({
			type: "title",
			value: "Название задачи не может быть пустым"
		} as ReduxTodoEditorError);
	}

	if (!Boolean(form.description.length)) {
		errors.push({
			type: "description",
			value: "Описание задачи не может быть пустым"
		} as ReduxTodoEditorError);
	}

	return errors;
};