import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { mdiDelete } from "../../Icons";
import ReduxRootState from "../../Interfaces/ReduxRootState";
import { Entity } from "../../Models/Entity";
import {
	todoListCreateNew,
	todoListDeleteTodo,
	todoListUpdateTodo,
} from "../../Redux/Todo/actions";
import AddButton from "../../Shared/AddButton";
import HeaderButton from "../../Shared/HeaderButton";
import { validateTodoForm } from "../../Utils/validations";
import EditorForm from "./Components/EditorForm";

const mapStateToProps = (state: ReduxRootState) => ({
	form: state.todo.editor?.form,
	todo: state.todo.editor?.todo,
	todos: state.todo.list?.todos,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
	bindActionCreators(
		{
			todoListCreateNew,
			todoListUpdateTodo,
			todoListDeleteTodo,
		},
		dispatch,
	);

type Props = {};

type PropsWithRedux = Props &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>;

const EditorScreen: React.FC<PropsWithRedux> = props => {
	const navigation = useNavigation();

	const isUpdate = Boolean(props.todo);

	useEffect(() => {
		if (isUpdate) {
			navigation.setOptions({
				headerRight: () => (
					<HeaderButton
						icon={mdiDelete}
						color={"#b52452"}
						onPress={() => {
							navigation.goBack();
							props.todoListDeleteTodo();
						}}
					/>
				),
			});
		}
	}, []);

	return (
		<SafeAreaProvider
			style={{
				padding: 12,
				backgroundColor: "white",
			}}
		>
			<SafeAreaView
				style={{
					justifyContent: "space-between",
					height: "100%",
				}}
			>
				<EditorForm />
				<AddButton
					onPress={() => {
						if (isUpdate) {
							props.todoListUpdateTodo({
								...props.todo,
								title: props.form?.title?.trim(),
								description: props.form?.description?.trim(),
								status: props.form?.status,
							} as Entity.Todo.Todo);
						} else {
							props.todoListCreateNew(props.form);
						}

						if (!Boolean(validateTodoForm(props.form)?.length)) {
							navigation.goBack();
						}
					}}
					buttonText={isUpdate ? "Изменить задачу" : "Создать задачу"}
				/>
			</SafeAreaView>
		</SafeAreaProvider>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorScreen);