import { PropsWithRedux } from "./index";

class ViewModel {
	props: PropsWithRedux;

	constructor(props: PropsWithRedux) {
		this.props = props;
	}

	get value() {
		return this.props.form[this.props.name];
	}

	get error() {
		if (Boolean(this.props.errors?.length)) {
			return this.props.errors.find(
				error => error.type == this.props.name
			);
		}
	}
}

export default ViewModel;