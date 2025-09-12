import {useNavigation} from "@react-navigation/native";
import {Animated, Pressable, StyleSheet, Text} from "react-native";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import {usePressAnimation} from "../../../Hooks/usePressAnimation";
import ReduxRootState from "../../../Interfaces/ReduxRootState";
import {todoEditorSetForm} from "../../../Redux/Todo/actions";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const styles = StyleSheet.create({
	button: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		borderRadius: 8,
		backgroundColor: "#21a66a"
	},
	text: {
		fontSize: 20,
		fontWeight: "bold",
		color: "white"
	}
});

const mapStateToProps = (state: ReduxRootState) => (
	{}
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

const HomeAddButton = (props: PropsWithRedux) => {
	const navigation = useNavigation();

	const {handlePressIn, handlePressOut, animatedStyle} = usePressAnimation();

	const pressOutCallback = () => {
		props.todoEditorSetForm();
		navigation.navigate("Editor", {
			title: "Новая задача"
		});
	};

	return (
		<AnimatedPressable
			onPressIn={handlePressIn}
			onPressOut={() => handlePressOut(pressOutCallback)}
			style={[styles.button, animatedStyle]}
		>
			<Text style={styles.text}>Добавить задачу</Text>
		</AnimatedPressable>
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeAddButton);