import React from "react";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import {MealsNavigator} from "./MealsNavigator";
import {FavNavigator} from "./FavNavigator";
import {createMaterialBottomTabNavigator} from "@react-navigation/material-bottom-tabs";
import {Text} from "react-native";
const Tab = createMaterialBottomTabNavigator();

export const TabNavigator = () => {
    return (
        <Tab.Navigator
            shifting
            screenOptions={({route}) => ({
                tabBarIcon: (tabInfo) => {
                    const name = route.name === 'Meals' ? 'ios-restaurant' : 'ios-star';
                    return <Ionicons name={name} size={25} color={tabInfo.color}/>
                },
                tabBarColor: Colors.primary,
                tabBarLabel: <Text style={{fontFamily: 'open-sans-bold', fontSize: 14}}>Meals</Text>
            })}

        >
            <Tab.Screen name='Meals' component={MealsNavigator}/>
            <Tab.Screen name='Favorites' component={FavNavigator} options={{
                tabBarColor: Colors.secondary,
                tabBarLabel: <Text style={{fontFamily: 'open-sans-bold', fontSize: 14}}>Favorites</Text>
            }}/>
        </Tab.Navigator>
    );
}