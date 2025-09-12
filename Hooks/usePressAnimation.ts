import {useRef} from "react";
import {Animated} from "react-native";

export type PressAnimationOptions = {
	scaleTo: number | null;
	opacityTo: number | null;
	duration: number | null;
}

export type AnimatedStyle = {
	transform: object[];
	opacity: number;
}

export type PressAnimationResponse = {
	handlePressIn: () => void;
	handlePressOut: (callback: () => void) => void;
	animatedStyle: AnimatedStyle;
}

export const usePressAnimation = (options: PressAnimationOptions): PressAnimationResponse => {

	const scaleTo = options?.scaleTo ?? 0.99;
	const opacityTo = options?.opacityTo ?? 0.8;
	const duration = options?.duration ?? 50;

	const scaleAnim = useRef(new Animated.Value(1)).current;
	const opacityAnim = useRef(new Animated.Value(1)).current;

	const handlePressIn = () => {
		Animated.timing(scaleAnim, {
			toValue: scaleTo,
			duration,
			useNativeDriver: true
		}).start();

		Animated.timing(opacityAnim, {
			toValue: opacityTo,
			duration,
			useNativeDriver: true
		}).start();
	};

	const handlePressOut = (callBack: () => void) => {
		Animated.timing(scaleAnim, {
			toValue: 1,
			duration: duration,
			useNativeDriver: true
		}).start();

		Animated.timing(opacityAnim, {
			toValue: 1,
			duration: duration,
			useNativeDriver: true
		}).start();

		callBack();
	};

	return {
		handlePressIn,
		handlePressOut,
		animatedStyle: {
			transform: [{scale: scaleAnim}],
			opacity: opacityAnim
		}
	};
};