import {StyleSheet, View} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import ReduxRootState from "../../../Interfaces/ReduxRootState";
import {Entity} from "../../../Models/Entity";

const styles = StyleSheet.create({});

const mapStateToProps = (state: ReduxRootState) => (
	{}
);

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(
	{},
	dispatch
);

type Props = {
	id: string;
	title: string;
	description: string;
	status: Entity.Todo.Status;
}

type PropsWithRedux = Props
	& ReturnType<typeof mapStateToProps>
	& ReturnType<typeof mapDispatchToProps>;

const HomeTodoItem = (props: PropsWithRedux) => {

	return <View></View>;
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeTodoItem);