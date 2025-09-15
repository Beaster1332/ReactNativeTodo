import MaterialDesignIcons from "@react-native-vector-icons/material-design-icons";
import React from "react";
import { TouchableOpacity } from "react-native";

type Props = {
	icon: string;
	onPress: () => void;
	color?: string;
};

const HeaderButton: React.FC<Props> = props => {
	return (
		<TouchableOpacity onPress={() => props.onPress()}>
			<MaterialDesignIcons
				name={props.icon}
				size={30}
				color={props.color ?? "inherit"}
			/>
		</TouchableOpacity>
	);
};

export default HeaderButton;