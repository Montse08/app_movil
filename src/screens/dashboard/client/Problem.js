import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import { FormButton } from '../../../components';
import { Colors } from '../../../utils';

const ProblemScreen = ({ navigation }) => {

    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title style={styles.titleCard}>¿Cuál es el problema?</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>
                    Describe especificamente cual es el problema a tratar, plaga o servicio que solicita.
                </Text>
                <TextInput
                        style={styles.inputMultiline}
                        underlineColorAndroid="transparent"
                        textAlignVertical="top"
                        // value={despues}
                        // onChangeText={text => setDespues(text)}
                        multiline
                        numberOfLines={4}
                        selectionColor="#999" />
                <Text style={styles.textF}>
                    Si tienes un problema de termitas se requiere
                    una visita para proporcionar costo y
                    una segunda visita para brindar el servicio.
                </Text>
                <FormButton
                    buttonTitle="SIGUIENTE"
                    onPress={() => navigation.navigate('TypeOfService')}
                />
            </Card>
        </View>
    );
}

export default ProblemScreen;

const styles = StyleSheet.create({
    viewStyle: {
        height: '100%',
        marginTop: '-10%',
        justifyContent: 'center'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    titleCard: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    text: {
        fontFamily: 'Kufam-SemiboldItalic',
        marginBottom: 10,
        color: '#000',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    textF: {
        fontFamily: 'Kufam-SemiboldItalic',
        marginBottom: 10,
        color: Colors.PRIMARY_COLOR_AZULDELLOGO,
        fontSize: 12,
        padding: 10,
        textAlign: 'center'
    },
    inputMultiline: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        marginBottom: 10,
        fontSize: 15
    },
})