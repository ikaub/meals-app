import React from "react";
import {View, StyleSheet, Text, TouchableOpacity, ImageBackground} from "react-native";
import {DefaultText} from "./DefaultText";

export const MealItem = ({title, onSelectMeal, duration, complexity, affordability, image}) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity activeOpacity={0.8} onPress={onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: image}} style={styles.bgImage}>
                            <View style={styles.titleContainer}>
                                <Text numberOfLines={1} style={styles.title}>{title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <DefaultText>{duration}m</DefaultText>
                        <DefaultText>{complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{affordability.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#e5e5e5',
        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 10
    },

    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 8,
        paddingHorizontal: 12
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
    },

    mealRow: {
        flexDirection: 'row'
    },

    mealHeader: {
        height: '85%'
    },

    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },

    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    }
});
