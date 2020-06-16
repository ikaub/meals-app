import React from "react";
import {FlatList, View, StyleSheet} from "react-native";
import {MealItem} from "./MealItem";

export const MealList = ({listData, navigation}) => {
    const renderMealItem = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                onSelectMeal={() => {
                    navigation.navigate('MealDetail', {
                        name: itemData.item.title,
                        mealId: itemData.item.id
                    });
                }}
                duration={itemData.item.duration}
                affordability={itemData.item.affordability}
                complexity={itemData.item.complexity}
                image={itemData.item.imageUrl}
            />
        );
    }

    return (
        <View style={styles.list}>
            <FlatList
                data={listData}
                renderItem={renderMealItem}
                style={{width: '100%'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});