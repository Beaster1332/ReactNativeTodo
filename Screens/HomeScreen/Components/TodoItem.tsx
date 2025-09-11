import {View} from "react-native";
import {Entity} from "../../../Models/Entity";
import {connect} from "react-redux";
import ReduxRootState from "../../../Interfaces/ReduxRootState";
import {bindActionCreators, Dispatch} from "redux";

const mapStateToProps = (state: ReduxRootState) => ({});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({}, dispatch);

type Props = {
    id: string;
    title: string;
    description: string;
    status: Entity.Todo.Status
}

type PropsWithRedux = Props
    & ReturnType<typeof mapStateToProps>
    & ReturnType<typeof mapDispatchToProps>;

const TodoItem = (props: PropsWithRedux) => {
    // todo:: сделать тудушку

    return <View></View>
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);