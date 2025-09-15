import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../../../Interfaces/ReduxRootState";
import { Entity } from "../../../../Models/Entity";
import Screens from "../../../../Models/Screens";
import {
	todoEditorSetForm,
	todoEditorSetTodo,
} from "../../../../Redux/Todo/actions";
import StatusIcon from "../../../../Shared/StatusIcon";
import ViewModel from "./ViewModel";

const styles = StyleSheet.create({
	root: {
		padding: 12,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		borderWidth: 2,
		borderColor: "#21a66a",
		borderRadius: 8,
	},
	textBlock: {},
	textBlockItem: {},
	paddingBottom: {
		paddingBottom: 8,
	},
	label: {
		paddingBottom: 4,
		opacity: 0.5,
	},
	titleValue: {
		fontSize: 20,
	},
	descValue: {
		fontSize: 16,
	},
});

const mapStateToProps = (state: ReduxRootState) => ({
	todos: state.todo.list.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			todoEditorSetForm,
			todoEditorSetTodo,
		},
		dispatch,
	);

type Props = {
	todo: Entity.Todo.Todo;
};

export type PropsWithRedux = Props &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const useViewModel = (props: PropsWithRedux): ViewModel => new ViewModel(props);

const HomeTodoItem: React.FC<PropsWithRedux> = props => {
	const viewModel = useViewModel(props);

	const navigation = useNavigation();

	const handlePress = () => {
		props.todoEditorSetTodo(viewModel.todo);
		props.todoEditorSetForm(viewModel.getFormFromSelectedTodo);

		navigation.navigate(Screens.Editor, {
			title: viewModel.title,
		});
	};

	return (
		<TouchableOpacity style={styles.root} onPress={handlePress}>
			<View style={styles.textBlock}>
				<View style={[styles.textBlockItem, styles.paddingBottom]}>
					<Text style={styles.label}>Название</Text>
					<Text style={styles.titleValue}>{viewModel.title}</Text>
				</View>
				<View style={styles.textBlockItem}>
					<Text style={styles.label}>Описание</Text>
					<Text style={styles.descValue}>
						{viewModel.description}
					</Text>
				</View>
			</View>
			<View>
				<StatusIcon
					icon={viewModel.statusIcon}
					size={35}
					color={viewModel.statusColor}
				/>
			</View>
		</TouchableOpacity>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTodoItem);