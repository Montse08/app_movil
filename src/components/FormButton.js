import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';
import { windowHeight } from "../utils/Dimentions";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from "../utils/Colors";

const FormButton = ({ buttonTitle, stylesText, stylesContainer, icon, size, color, ...rest }) => {
    return (
        <TouchableOpacity style={[styles.buttonContainer, stylesContainer]}{...rest}>
            {buttonTitle && icon ? (
                <View style={{flexDirection: 'row', alignContent: 'center', justifyContent: 'space-between'}}>
                    <FontAwesome name={icon} size={size} color={color} />
                    <Text style={[styles.buttonText, stylesText]}>{buttonTitle}</Text>
                </View>
            ) : (
                <View>
                    {buttonTitle ? (
                        <Text style={[styles.buttonText, stylesText]}>{buttonTitle}</Text>
                    ) : (
                        <FontAwesome name={icon} size={size} color={color} />
                    )}
                </View>
            )}
        </TouchableOpacity>
    );
};

export default FormButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        heigth: windowHeight / 15,
        backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
});