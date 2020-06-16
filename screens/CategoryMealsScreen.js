import React from "react";
import {View, StyleSheet} from "react-native";
import {useSelector} from "react-redux";
import {MealList} from "../components/MealList";
import {DefaultText} from "../components/DefaultText";

export const CategoryMealsScreen = ({route, navigation}) => {
    const availableMeals = useSelector(state => state.meals.filteredMeals);

    const {categoryId} = route.params;
    const displayedMeals = availableMeals.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);
    if(displayedMeals.length === 0) {
        return (
            <View style={styles.content}>
                <DefaultText>No meals found. Please, disable some filters to see them.</DefaultText>
            </View>
        );
    }

    return (
        <MealList listData={displayedMeals} navigation={navigation} />
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})