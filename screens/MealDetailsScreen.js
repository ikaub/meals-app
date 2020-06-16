import React, {useEffect} from "react";
import {View, Text, StyleSheet, ScrollView, ImageBackground, SafeAreaView} from "react-native";
import {DefaultText} from "../components/DefaultText";
import Colors from "../constants/Colors";
import {Ionicons} from "@expo/vector-icons";
import {useSelector} from "react-redux";

export const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const availableMeals = useSelector(state => state.meals.meals);
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals);
    const selectedMeal = availableMeals.find(meal => meal.id === mealId);
    const iconName = favoriteMeals.indexOf(selectedMeal) >=0 ? 'ios-star' : 'ios-star-outline';

    useEffect(() => {
        navigation.setParams({iconName});
        console.log(route.params);
    }, [iconName])

    const renderList = (item) => {
        return (
            <DefaultText key={item} style={styles.listItem}>
                <Ionicons name="ios-checkmark-circle" size={24} color={Colors.primary}/> {item}
            </DefaultText>
        );
    }

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView>
                <View style={styles.item}>
                    <View style={styles.imageContainer}>
                        <ImageBackground style={styles.image} source={{uri: selectedMeal.imageUrl}}>
                            <Text style={styles.imageTitle}>{selectedMeal.title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={styles.additionalInfo}>
                        <DefaultText style={styles.characteristics}>
                            <Ionicons name='md-time' size={20}/> {selectedMeal.duration}m
                        </DefaultText>
                        <DefaultText style={styles.characteristics}>
                            <Ionicons name='ios-podium' size={20}/> {selectedMeal.complexity.toUpperCase()}
                        </DefaultText>
                        <DefaultText style={styles.characteristics}>
                            <Ionicons name='md-cash' size={20}/> {selectedMeal.affordability.toUpperCase()}
                        </DefaultText>
                    </View>
                    <Text style={styles.title}>Ingredients</Text>
                    {selectedMeal.ingredients.map(ingredient => renderList(ingredient))}
                    <Text style={styles.title}>Steps</Text>
                    {selectedMeal.steps.map(step => renderList(step))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    item: {
        paddingHorizontal: 15,
        marginVertical: 12
    },

    characteristics: {
        fontSize: 17,
        color: Colors.primary
    },

    imageTitle: {
        color: 'white',
        backgroundColor: Colors.primary,
        opacity: 0.7,
        textAlign: 'center',
        paddingHorizontal: 15,
        paddingVertical: 5,
        fontSize: 20,
        fontFamily: 'open-sans-bold'
    },

    imageContainer: {
        height: 220,
        width: '100%'
    },

    image: {
        justifyContent: 'flex-end',
        height: '100%',
        width: '100%'
    },

    additionalInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 26
    },

    listItem: {
        fontSize: 18,
        marginVertical: 5
    }
});