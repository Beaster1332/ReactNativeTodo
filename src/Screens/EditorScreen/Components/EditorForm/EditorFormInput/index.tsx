import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../../../../Interfaces/ReduxRootState";
import { todoEditorSetForm } from "../../../../../Redux/Todo/actions";
import { ReduxTodoEditorForm } from "../../../../../Redux/Todo/interface";
import ViewModel from "./ViewModel";

const styles = StyleSheet.create({
	input: {
		paddingTop: 20,
		paddingBottom: 20,
		paddingLeft: 16,
		paddingRight: 16,
		borderColor: "#21a66a",
		borderWidth: 2,
		borderRadius: 8,
		fontSize: 16
	},
	error: {
		borderColor: "red"
	},
	errorText: {
		marginTop: 8,
		color: "red"
	}
});

const mapStateToProps = (state: ReduxRootState) => (
	{
		form: state.todo.editor.form,
		errors: state.todo.editor.errors
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

export type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const useViewModel = (props: PropsWithRedux): ViewModel => new ViewModel(props);

const EditorFormInput: React.FC<PropsWithRedux> = props => {
	const viewModel = useViewModel(props);

	const handleChange = (text: string) => {
		props.todoEditorSetForm({
			...props.form,
			[props.name]: text
		});
	};

	return <View>
		<TextInput
			style={ [styles.input, Boolean(viewModel.error) && styles.error] }
			value={ viewModel.value }
			placeholder={ props.placeholder }
			onChangeText={ (text) => handleChange(text) }
			multiline={ props?.multiline }
			textAlignVertical={ "top" }
		/>
		{Boolean(viewModel.error) && <Text style={styles.errorText}>{viewModel.error.value}</Text>}
	</View>;
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorFormInput);