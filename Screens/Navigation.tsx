import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import TodoScreen from "./TodoScreen";

const Stack = createNativeStackNavigator()

const Navigation = () => {
    return <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: "Тудушки"}}/>
        <Stack.Screen name="Todo" component={TodoScreen} />
    </Stack.Navigator>
}

export default Navigation