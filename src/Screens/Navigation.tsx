import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import EditorScreen from "./EditorScreen";
import HomeScreen from "./HomeScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
	return <Stack.Navigator initialRouteName="Home">
		<Stack.Screen
			name="Home"
			component={HomeScreen}
			options={{
				header: null
			}}
		/>
		<Stack.Screen
			name="Editor"
			component={EditorScreen}
			options={({route}) => (
				{
					title: route.params.title
				}
			)}
		/>
	</Stack.Navigator>;
};

export default Navigation;