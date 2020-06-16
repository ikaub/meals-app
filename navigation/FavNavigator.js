import React, {useCallback} from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import {FavoritesScreen} from "../screens/FavoritesScreen";
import {MealDetailScreen} from "../screens/MealDetailsScreen";
import {HeaderButton} from "../components/HeaderButton";
import DefaultHeaderOptions from "../constants/DefaultHeaderOptions";
import {useDispatch} from "react-redux";
import {toggleFavorite} from "../redux/actions/meals";

const Stack = createStackNavigator();

export const FavNavigator = () => {

    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback((mealId) => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch])

    return (
        <Stack.Navigator screenOptions={DefaultHeaderOptions}>
            <Stack.Screen
                name={'Favorites'}
                component={FavoritesScreen}
                options={({navigation}) => ({
                    headerLeft: () => (
                        <HeaderButton name='ios-menu' onPress={() => {
                            navigation.openDrawer();
                        }}/>
                    )
                })}
            />
            <Stack.Screen
                name='MealDetail'
                component={MealDetailScreen}
                options={
                    ({route}) => ({
                        title: route.params.name,
                        headerRight: () => (
                            <HeaderButton name={route.params.iconName} onPress={() => toggleFavoriteHandler(route.params.mealId)}/>
                        )
                    })
                }
            />
        </Stack.Navigator>
    );
};