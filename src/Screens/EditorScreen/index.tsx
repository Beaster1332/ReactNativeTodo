import { useNavigation } from "@react-navigation/native";
import React from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../Interfaces/ReduxRootState";
import { todoListCreateNew } from "../../Redux/Todo/actions";
import AddButton from "../../Shared/AddButton";
import { validateTodoForm } from "../../Utils/validations";
import EditorForm from "./Components/EditorForm";

const mapStateToProps = (state: ReduxRootState) => (
	{
		form: state.todo.editor?.form
	}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
	todoListCreateNew
}, dispatch);

type Props = {};

type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const EditorScreen: React.FC<PropsWithRedux> = props => {
	const navigation = useNavigation();

	return <SafeAreaProvider
		style={{
			padding: 12,
			backgroundColor: "white"
		}}
	>
		<SafeAreaView style={{
			justifyContent: "space-between",
			height: "100%"
		}}>
			<EditorForm />
			<AddButton
				onPress={() => {
					props.todoListCreateNew(props.form);
					if (!Boolean(validateTodoForm(props.form).length)) {
						navigation.goBack();
					}
				}}
				buttonText={"Создать задачу"}
			/>
		</SafeAreaView>
	</SafeAreaProvider>;
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorScreen);