import React from "react";
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from "../utils/Colors";
import { windowHeight } from "../utils/Dimentions";
import { windowWidth } from "../utils/Dimentions";


const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={styles.buttonContainer}{...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
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