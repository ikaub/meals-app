import React, {useCallback, useEffect, useState} from "react";
import {View, Text, StyleSheet, Switch, Platform} from "react-native";
import Colors from "../constants/Colors";
import {DefaultText} from "../components/DefaultText";
import {useDispatch} from "react-redux";
import {setFilters} from "../redux/actions/meals";

const FilterSwitch = ({label, state, onChange}) => {
    return (
        <View style={styles.filterContainer}>
            <DefaultText style={{fontSize: 18}}>{label}</DefaultText>
            <Switch
                value={state}
                onValueChange={(newValue) => onChange(newValue)}
                trackColor={{true: Colors.primary}}
                thumbColor={Platform.OS === 'android' ? Colors.primary : ''}
            />
        </View>
    );
}

export const FiltersScreen = ({navigation}) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const dispatch = useDispatch();

    const saveFilters = useCallback(() => {
        const appliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        }
        dispatch(setFilters(appliedFilters));
    }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters, navigation])

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={setIsGlutenFree}/>
            <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={setIsLactoseFree}/>
            <FilterSwitch label='Vegan' state={isVegan} onChange={setIsVegan}/>
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={setIsVegetarian}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },

    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 20,
        width: '60%'
    }
});