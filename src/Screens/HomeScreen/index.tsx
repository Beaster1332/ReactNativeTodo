import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import ReduxRootState from "../../Interfaces/ReduxRootState";
import Screens from "../../Models/Screens";
import { todoEditorSetForm } from "../../Redux/Todo/actions";
import AddButton from "../../Shared/AddButton";
import HomeTodoItem from "./Components/HomeTodoItem";

const styles = StyleSheet.create({
	safeAreaProvider: {
		padding: 12,
		flex: 1
	},
	safeAriaView: {
		flex: 1
	},
	view: {
		flex: 1,
		justifyContent: "space-between"
	}
});

const mapStateToProps = (state: ReduxRootState) => (
	{
		todos: state.todo.list.todos
	}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
	{
		todoEditorSetForm
	},
	dispatch
);

type Props = {};

type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const HomeScreen: React.FC<PropsWithRedux> = (props) => {
	return <SafeAreaProvider
		style={ styles.safeAreaProvider }
	>
		<SafeAreaView style={ styles.safeAriaView }>
			<View style={ styles.view }>
				<FlatList
					data={ props.todos }
					renderItem={ ({ item }) => (
						<HomeTodoItem
							id={ item.id }
							title={ item.title }
							status={ item.status }
							description={ item.description }
						/>
					) }
				/>
				<AddButton
					buttonText="Добавить задачу"
					headerTitle="Новая задача"
					onPress={ () => props.todoEditorSetForm({
						title: "",
						description: "",
						status: "new"
					}) }
					screen={ Screens.Editor }
				/>
			</View>
		</SafeAreaView>
	</SafeAreaProvider>;
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);