import React from "react";
import {Text, View} from "react-native";

type Props = {
	text?: string;
};

const Empty: React.FC<Props> = props => {
	return <View style={{
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}}>
		<Text style={{opacity: 0.5}}>
			{Boolean(props.text) ? props.text : "Пусто"}
		</Text>
	</View>;
};

export default Empty;