import MaterialDesignIcons
	from "@react-native-vector-icons/material-design-icons";
import React from "react";
import {View} from "react-native";

type Props = {
	icon: string;
	size: number;
	color: string;
};

const StatusIcon: React.FC<Props> = props => {
	return <View>
		<MaterialDesignIcons
			name={props.icon}
			size={props.size}
			color={props.color}
		/>
	</View>;
};

export default StatusIcon;