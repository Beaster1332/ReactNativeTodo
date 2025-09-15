import {
	mdiCheckboxMarked,
	mdiClockTimeEight,
	mdiNewBox,
} from "../../../../Icons";
import {Entity} from "../../../../Models/Entity";
import {ReduxTodoEditorForm} from "../../../../Redux/Todo/interface";
import {PropsWithRedux} from "./index";

class ViewModel {
	props: PropsWithRedux;

	constructor(props: PropsWithRedux) {
		this.props = props;
	}

	get todo(): Entity.Todo.Todo {
		return this.props.todo;
	}

	get title(): string {
		return this.props.todo.title;
	}

	get description(): string {
		return this.props.todo.description;
	}

	get getFormFromSelectedTodo(): ReduxTodoEditorForm {
		return {
			title: this.props.todo.title,
			description: this.props.todo.description,
			status: this.props.todo.status,
		};
	}

	get statusIcon(): string {
		switch (this.props.todo.status) {
			case "new":
				return mdiNewBox;
			case "inProcess":
				return mdiClockTimeEight;
			case "done":
				return mdiCheckboxMarked;
		}
	}

	get statusColor(): string {
		switch (this.props.todo.status) {
			case "new":
				return "#4282eb";
			case "inProcess":
				return "#eba242";
			case "done":
				return "#25cf69";
		}
	}
}

export default ViewModel;