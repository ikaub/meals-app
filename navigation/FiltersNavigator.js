import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {FiltersScreen} from "../screens/FiltersScreen";
import {HeaderButton} from "../components/HeaderButton";
import DefaultHeaderOptions from "../constants/DefaultHeaderOptions";

const Stack = createStackNavigator();

export const FiltersNavigator = () => {
    return (
        <Stack.Navigator screenOptions={DefaultHeaderOptions}>
            <Stack.Screen
                name='Filters'
                component={FiltersScreen}
                options={({navigation, route}) => ({
                    title: 'Filters',
                    headerLeft: () => (
                        <HeaderButton name='ios-menu' onPress={() => {
                            navigation.openDrawer();
                        }}/>
                    ),
                    headerRight: () => (
                        <HeaderButton name='ios-save' onPress={() => {
                            route.params.save();
                        }} />
                    )
                })}/>
        </Stack.Navigator>
    );
}