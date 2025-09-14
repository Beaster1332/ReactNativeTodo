import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../../../../Interfaces/ReduxRootState";
import { todoEditorSetForm } from "../../../../../Redux/Todo/actions";
import { ReduxTodoEditorForm } from "../../../../../Redux/Todo/interface";
import { todoSelectError } from "../../../../../Redux/Todo/selectors";

const styles = StyleSheet.create({
	input: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 16,
		paddingRight: 16,
		borderColor: "#21a66a",
		borderWidth: 1,
		borderRadius: 8,
		fontSize: 16
	},
	error: {
		borderColor: "red",
		color: "red"
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

	const handleChange = (text: string) => {
		props.todoEditorSetForm({
			...props.form,
			[props.name]: text
		});
	};

	return <View>
		<TextInput
			style={ [styles.input, Boolean(error) && styles.error] }
			value={ value }
			placeholder={ props.placeholder }
			onChangeText={ (text) => handleChange(text) }
			multiline={ props?.multiline }
			textAlignVertical={ "top" }
		/>
		{Boolean(error) && <Text>{error.value}</Text>}
	</View>;
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorFormInput);