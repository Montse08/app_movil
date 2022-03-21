import React from "react";
import { View, TextInput, StyleSheet } from 'react-native';
import Colors from "../utils/Colors";
import { windowHeight } from "../utils/Dimentions";
import { windowWidth } from "../utils/Dimentions";


const Forminput = ({ labelValue, placeholderText, iconType, ...rest }) => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                multiline={true}
                // numberOfLines={4}
                value={labelValue}
                style={styles.input}
                // onChangeText={text => onChangeText(text)}
                placeholder=""
                // maxLength={50}
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
        width: 324,
        height: 110,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        aligItems: 'center',
        backgroundColor: '#fff'
    },
    input: {
        padding: 1,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        // justifyContent: 'center',
        // alignItems: 'center',
        // //        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
});