import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from "expo";
import {NavigationContainer} from "@react-navigation/native";
import {enableScreens} from "react-native-screens";
import {DrawerNavigator} from "./navigation/DrawerNavigator";
import store from "./redux/store/store";
import {Provider} from "react-redux";

enableScreens();

const fetchFonts = () => {
    return Font.loadAsync({
        'open-sans': require('./assets/fonts/Lato-Regular.ttf'),
        'open-sans-bold': require('./assets/fonts/Lato-Bold.ttf')
    });
}

export default function App() {
    const [fontLoaded, setFontLoaded] = useState(false);

    if (!fontLoaded)
        return <AppLoading startAsync={fetchFonts} onFinish={() => setFontLoaded(true)}/>

    return (
        <Provider store={store}>
            <NavigationContainer>
                <DrawerNavigator/>
            </NavigationContainer>
        </Provider>
    );
}

