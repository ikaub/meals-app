import React, {useCallback} from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {CategoriesScreen} from "../screens/CategoriesScreen";
import {CategoryMealsScreen} from "../screens/CategoryMealsScreen";
import {MealDetailScreen} from "../screens/MealDetailsScreen";
import {HeaderButton} from "../components/HeaderButton";
import DefaultHeaderOptions from "../constants/DefaultHeaderOptions";
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorite} from "../redux/actions/meals";

const Stack = createStackNavigator();

export const MealsNavigator = () => {
    const dispatch = useDispatch();


    const toggleFavoriteHandler = useCallback((mealId) => {
        dispatch(toggleFavorite(mealId));
    }, [dispatch])

    return (
        <Stack.Navigator screenOptions={DefaultHeaderOptions}>
            <Stack.Screen
                name='Categories'
                component={CategoriesScreen}
                options={({navigation}) => ({
                    title: 'Meal Categories',
                    headerLeft: () => (
                        <HeaderButton name='ios-menu' onPress={() => {
                            navigation.openDrawer();
                        }}/>
                    )
                })}
            />
            <Stack.Screen
                name='CategoryMeals'
                component={CategoryMealsScreen}
                options={({route}) => ({title: route.params.name})}
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
}