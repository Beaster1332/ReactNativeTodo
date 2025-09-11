import React from "react";
import Navigation from "./Screens/Navigation";
import {NavigationContainer} from "@react-navigation/native";
import {Provider} from "react-redux";
import {reduxStore} from "./Redux/reduxStore";

const App = () => {
    return (
        <Provider store={reduxStore}>
            <NavigationContainer>
                <Navigation/>
            </NavigationContainer>
        </Provider>
    );
}

export default App
