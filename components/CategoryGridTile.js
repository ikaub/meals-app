import React from "react";
import {Text, Platform, TouchableOpacity, View, StyleSheet, TouchableNativeFeedback} from "react-native";

export const CategoryGridTile = ({title, onSelect, color}) => {
    let TouchableComponent = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version > 21)
        TouchableComponent = TouchableNativeFeedback;

    return (
        <View style={styles.gridItem}>
            <TouchableComponent style={{flex: 1}} onPress={onSelect}>
                <View style={{...styles.container, backgroundColor: color}}>
                    <Text numberOfLines={2} style={styles.title}>{title}</Text>
                </View>
            </TouchableComponent>
        </View>
    );
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 8,
        overflow: 'hidden'
    },

    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },

    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        textAlign: 'right'
    }
});