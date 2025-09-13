import React from "react";
import {FlatList} from "react-native";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import ReduxRootState from "../../Interfaces/ReduxRootState";
import AddButton from "../../Shared/AddButton";
import HomeTodoItem from "./Components/HomeTodoItem";
import {todoEditorSetForm} from "../../Redux/Todo/actions";

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
        style={{padding: 12}}
    >
        <SafeAreaView>
            <AddButton
                buttonText="Добавить задачу"
               headerTitle="Новая задача"
               onPress={() => props.todoEditorSetForm({
                   title: "",
                   description: "",
                   status: "new"
               })}
                screen={"Editor"}
            />
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