import React from "react";
import {MealList} from "../components/MealList";
import {useSelector} from "react-redux";
import {View, StyleSheet} from "react-native";
import {DefaultText} from "../components/DefaultText";

export const FavoritesScreen = ({navigation}) => {
    const favouriteMeals = useSelector(state => state.meals.favoriteMeals)

    if(favouriteMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No Favorites found. It's good time to add some!</DefaultText>
            </View>
        );
    }

    return (
        <MealList listData={favouriteMeals} navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

