import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {StatusBar} from "react-native";
import {Provider} from "react-redux";
import {reduxStore} from "./Redux/reduxStore";
import Navigation from "./Screens/Navigation";

const App = () => {
	return (
		<Provider store={reduxStore}>
			<NavigationContainer>
				<StatusBar />
				<Navigation />
			</NavigationContainer>
		</Provider>
	);
};

export default App;
