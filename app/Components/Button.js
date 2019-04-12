import {Text, TouchableOpacity} from "react-native";
import React from "react";

export const Button = ({ textStyle, buttonStyle, onPress, buttonName}) => (
        <TouchableOpacity style={buttonStyle} onPress={onPress}>
            <Text style={textStyle}>{buttonName}</Text>
        </TouchableOpacity>
);