import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import FormButton from '../components/FormButton';
import InputCard from '../components/InputCard';


const DomicileScreen = ({ navigation }) => {

    const [comment] = useState();

    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title style={styles.titleCard}> ¿DONDE SE ENCUENTRA TU DOMICILIO? </Card.Title>
                <Card.Divider />
                <Text style={styles.text}>
                    Ingresa detalladamente la
                    dirección a la cual solicitas el servicio.
                </Text>
                <InputCard
                    labelValue={comment}
                    placeholderText="comment"
                    autocapitalize="characters"
                    autoCorrect={false} />
                <FormButton
                    buttonTitle="SIGUIENTE"
                    onPress={() => navigation.navigate('Pets')}
                />
            </Card>

        </View>
    );
}

export default DomicileScreen;

const styles = StyleSheet.create({
    input: {
        padding: 1,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCard: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    viewStyle: {
        padding: -2,
        marginTop: 170,
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Kufam-SemiboldItalic',
        marginBottom: 10,
        color: '#000',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
})