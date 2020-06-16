import React from "react";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {TabNavigator} from "./TabNavigator";
import {HeaderButton} from "../components/HeaderButton";
import {FiltersNavigator} from "./FiltersNavigator";
import Colors from "../constants/Colors";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator drawerContentOptions={{
            activeTintColor: Colors.secondary,
            labelStyle: {
                fontSize: 20,
                fontFamily: 'open-sans-bold'
            }
        }}>
            <Drawer.Screen name='MealsFavs' component={TabNavigator} options={{
                drawerLabel: 'Meals',
            }}
            />
            <Drawer.Screen
                name='Filters'
                component={FiltersNavigator}
            />
        </Drawer.Navigator>
    )
}