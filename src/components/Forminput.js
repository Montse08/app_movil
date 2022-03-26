import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Dimentions } from "../utils";


const Forminput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <Icon name={iconType} size={25} color="#666" iconType="FontAwesome" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

export default Forminput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: Dimentions.windowHeight / 15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        aligItems: 'center',
        backgroundColor: '#fff'
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 1,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: Dimentions.windowWidth / 1.5,
        height: Dimentions.windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
});