import {useNavigation} from "@react-navigation/native";
import React from "react";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import ReduxRootState from "../../Interfaces/ReduxRootState";
import {todoListCreateNew, todoListUpdateTodo} from "../../Redux/Todo/actions";
import AddButton from "../../Shared/AddButton";
import {validateTodoForm} from "../../Utils/validations";
import EditorForm from "./Components/EditorForm";
import {Entity} from "../../Models/Entity";

const mapStateToProps = (state: ReduxRootState) => (
    {
        form: state.todo.editor?.form,
        todo: state.todo.editor?.todo
    }
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    todoListCreateNew,
    todoListUpdateTodo
}, dispatch);

type Props = {};

type PropsWithRedux = Props
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>;

const EditorScreen: React.FC<PropsWithRedux> = props => {
    const navigation = useNavigation();

    const isUpdate = Boolean(props.todo);

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
            <EditorForm/>
            <AddButton
                onPress={() => {
                    if (isUpdate) {
                        props.todoListUpdateTodo({
                            ...props.todo,
                            title: props.form?.title,
                            description: props.form?.description,
                            status: props.form?.status
                        } as Entity.Todo.Todo) // todo:: подумать, как можно сделать алерт об успешном создании или редактировании тудушки
                    } else {
                        props.todoListCreateNew(props.form);
                    }

                    if (!Boolean(validateTodoForm(props.form).length)) {
                        navigation.goBack();
                    }
                }}
                buttonText={isUpdate ? "Изменить задачу" : "Создать задачу"}
            />
        </SafeAreaView>
    </SafeAreaProvider>;
};

export default connect(mapStateToProps, mapDispatchToProps)(EditorScreen);