import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../../../Interfaces/ReduxRootState";
import { todoEditorSetForm } from "../../../../Redux/Todo/actions";
import { ReduxTodoEditorForm } from "../../../../Redux/Todo/interface";

const styles = StyleSheet.create({
	input: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 16,
		paddingRight: 16,
		borderColor: "blue",
		borderWidth: 1,
		borderRadius: 8,
		fontSize: 16
	}
});

const mapStateToProps = (state: ReduxRootState) => (
	{
		form: state.todo.editor.form
	}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
	todoEditorSetForm
}, dispatch);

type Props = {
	name: keyof ReduxTodoEditorForm;
	placeholder: string;
	multiline?: boolean;
};

type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const EditorFormInput: React.FC<PropsWithRedux> = props => {
	const value = props.form[props.name];

	// if (props.isValid != undefined && !props.isValid) {
	//     Alert.alert("Ошибка", props.alertText);
	//     return;
	// }

	const handleChange = (text: string) => {
		props.todoEditorSetForm({
			...props.form,
			[props.name]: text
		});
	};

	return <TextInput
		style={ styles.input }
		value={ value }
		placeholder={ props.placeholder }
		onChange={(event) => handleChange(event) } // todo:: разобраться с передачей event, сделать еще отключение клавиатуры, когда нажимаешь вне инпута
		multiline={ props?.multiline }
	/>;
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorFormInput);