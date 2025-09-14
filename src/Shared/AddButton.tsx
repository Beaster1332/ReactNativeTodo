import {useNavigation} from "@react-navigation/native";
import React from "react";
import {Animated, Pressable, StyleSheet, Text} from "react-native";
import {usePressAnimation} from "../Hooks/usePressAnimation";

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

type Props = {
	onPress: () => void;
	headerTitle?: string;
	buttonText: string;
	screen?: string;
};

const AddButton: React.FC<Props> = (props) => {
	const navigation = useNavigation();

	const {handlePressIn, handlePressOut, animatedStyle} = usePressAnimation();

	const pressOutCallback = () => {
		props.onPress();
		if (props.screen != undefined) {
			navigation.navigate(props.screen, {
				title: props.headerTitle
			});
		}
	}

	return (
		<AnimatedPressable
			onPressIn={handlePressIn}
			onPressOut={() => handlePressOut(pressOutCallback)}
			style={[styles.button, animatedStyle]}
		>
			<Text style={styles.text}>{props.buttonText}</Text>
		</AnimatedPressable>
	);
};

export default AddButton;