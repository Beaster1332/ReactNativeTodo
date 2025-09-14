import MaterialDesignIcons
	from "@react-native-vector-icons/material-design-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity } from "react-native";

type Props = {
	onPress: () => void;
};

const HeaderBackButton: React.FC<Props> = props => {
	const navigation = useNavigation();

	return <TouchableOpacity
		onPress={ () => {
			navigation.goBack();
			props.onPress();
		} }
	>
		<MaterialDesignIcons name={ "keyboard-backspace" } size={ 30 } />
	</TouchableOpacity>;
};

export default HeaderBackButton;