import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import ReduxRootState from "../Interfaces/ReduxRootState";
import Screens from "../Models/Screens";
import {todoEditorCloseForm} from "../Redux/Todo/actions";
import HeaderBackButton from "./Components/HeaderBackButton";
import EditorScreen from "./EditorScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const mapStateToProps = (state: ReduxRootState) => (
    {}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
    todoEditorCloseForm
}, dispatch);

type Props = {};

type PropsWithRedux = Props
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>;

const Navigation: React.FC<PropsWithRedux> = props => {
    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name={Screens.Home}
            component={HomeScreen}
            options={{
                header: null
            }}
        />
        <Stack.Screen
            name={Screens.Editor}
            component={EditorScreen}
            options={({route, navigation}) => (
                {
                    title: route.params.title,
                    headerLeft: () => <HeaderBackButton
                        onPress={props.todoEditorCloseForm}/>
                }
            )}
        />
    </Stack.Navigator>;
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);