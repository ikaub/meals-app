import React from "react";
import {Ionicons} from '@expo/vector-icons'
import {Platform, View, TouchableOpacity} from "react-native";
import Colors from "../constants/Colors";

export const HeaderButton = ({name, onPress}) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Ionicons
                    name={name}
                    size={33}
                    color={Platform.OS === 'android' ? 'white' : Colors.primary}
                    style={{marginHorizontal: 15}}
                />
            </View>
        </TouchableOpacity>
    );
}