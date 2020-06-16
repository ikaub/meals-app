import React from "react";
import {StyleSheet, FlatList} from "react-native";
import {CATEGORIES} from "../data/data";
import {CategoryGridTile} from "../components/CategoryGridTile";

export const CategoriesScreen = ({navigation}) => {

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile
                color={itemData.item.color}
                title={itemData.item.title}
                onSelect={() => navigation.navigate('CategoryMeals', {
                    name: itemData.item.title,
                    categoryId: itemData.item.id
                })}/>
        );
    }

    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem}/>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});