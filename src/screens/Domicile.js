import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CheckBox } from 'react-native-elements';
import FormButton from '../components/FormButton';



const DomicileScreen = ({ navigation }) => {

    const [comment] = useState();
    const [check, setCheck] = useState(0);

    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title style={styles.titleCard}> ¿A que dirección se le otorgará el servicio? </Card.Title>
                <Card.Divider />
                    <CheckBox
                        title='Dirección 1'
                        checkedColor='#1b1464'
                        checked={check == 0 ? true : false}
                        onPress={() => setCheck(0)} 
                    />
                    
                    <CheckBox
                        title='Dirección 2'
                        checkedColor='#1b1464'
                        checked={check == 1 ? true : false}
                        onPress={() => setCheck(1)} 
                    />
                {/* <Text style={styles.text}>
                    Ingresa detalladamente la
                    dirección a la cual solicitas el servicio.
                </Text> */}
                <FormButton
                
                    buttonTitle="Agregar nueva dirección"
                    onPress={() => navigation.navigate('Addresses', {
                        screen: 'Domicile'
                    })}
                />
                <FormButton
                    buttonTitle="Siguiente"
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
        height: '100%',
        marginTop: '-10%',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Kufam-SemiboldItalic',
        marginBottom: 10,
        color: '#000',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    }
})