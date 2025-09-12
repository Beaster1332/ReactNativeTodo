import React from "react";
import {FlatList} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import ReduxRootState from "../../Interfaces/ReduxRootState";
import HomeAddButton from "./Components/HomeAddButton";
import HomeTodoItem from "./Components/HomeTodoItem";

const mapStateToProps = (state: ReduxRootState) => (
	{
		todos: state.todo.list.todos
	}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
	{},
	dispatch
);

type Props = {};

type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const HomeScreen = (props: PropsWithRedux) => {
	return <SafeAreaProvider
		style={{padding: 12}}
	>
		<SafeAreaView>
			<HomeAddButton />
			<FlatList
				data={props.todos}
				renderItem={({item}) => (
					<HomeTodoItem
						id={item.id}
						title={item.title}
						status={item.status}
						description={item.description}
					/>
				)}
			/>
		</SafeAreaView>
	</SafeAreaProvider>;
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);