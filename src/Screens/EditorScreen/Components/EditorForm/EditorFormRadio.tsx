import React from "react";
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import ReduxRootState from "../../../../Interfaces/ReduxRootState";
import {Entity} from "../../../../Models/Entity";
import {todoEditorSetForm} from "../../../../Redux/Todo/actions";
import {todoSelectIsStatusSelected} from "../../../../Redux/Todo/selectors";

const styles = StyleSheet.create({
	root: {
		width: 100,
		alignItems: "center",
		marginLeft: 8,
		marginRight: 8,
	},
	label: {
		fontWeight: "bold",
		fontSize: 20,
	},
	outerCircle: {
		height: 28,
		width: 28,
		marginBottom: 8,
		borderRadius: 14,
		borderWidth: 3,
		borderColor: "#21a66a",
		alignItems: "center",
		justifyContent: "center",
	},
	innerCircle: {
		height: 14,
		width: 14,
		borderRadius: 7,
		backgroundColor: "#b52452",
	},
	outerSelected: {
		borderColor: "#b52452",
	},
});

const mapStateToProps = (state: ReduxRootState) => (
	{
		form: state.todo.editor.form,
		isTodoSelected: Boolean(state.todo.editor?.todo),
		isSelected: todoSelectIsStatusSelected(state),
	}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
	{
		todoEditorSetForm,
	},
	dispatch,
);

type Props = {
	type: Entity.Todo.Status;
	label: string;
};

type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const EditorFormRadio: React.FC<PropsWithRedux> = props => {
	const isSelected = props.isSelected(props.type);

	return (
		<TouchableOpacity
			onPress={() => props.todoEditorSetForm({
				...props.form,
				status: props.type,
			})}
			style={[
				styles.root,
				!props.isTodoSelected && {marginLeft: 24, marginRight: 24},
			]}
		>
			<View
				style={[
					styles.outerCircle,
					isSelected && styles.outerSelected,
				]}>
				{isSelected ? <View style={styles.innerCircle} /> : null}
			</View>
			<Text style={styles.label}>{props.label}</Text>
		</TouchableOpacity>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorFormRadio);