import {FlatList, SafeAreaView} from "react-native";
import TodoItem from "./Components/TodoItem";
import ReduxRootState from "../../Interfaces/ReduxRootState";
import {bindActionCreators, Dispatch} from "redux";
import {connect} from "react-redux";
import React from "react";

const mapStateToProps = (state: ReduxRootState) => ({
    todos: state.todo.list.todos
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch)

type Props = {};

type PropsWithRedux = Props
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>;

const HomeScreen = (props: PropsWithRedux) => {
    return <SafeAreaView style={{flex: 1}}>
        <FlatList data={props.todos} renderItem={({item}) => <TodoItem/>}/>
    </SafeAreaView>
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)