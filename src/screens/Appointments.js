import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderScreenComponent from '../components/HeaderScreen';
import { Card, Button } from 'react-native-elements';
import Colors from '../utils/Colors';

const AppointmentsScreen = ({ navigation }) => {
    return (
        <View>
            <HeaderScreenComponent title="Citas" />
            <View style={styles.viewStyle}>
                <Card>
                    <Card.Title style={styles.titleCard}>AGENDE UNA CITA</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={styles.image}
                        source={require('../assets/xx.jpg')}
                    />
                    <Card.Divider />
                    <Text style={styles.text}>
                        Para agendar una cita con nosotros,
                        responde las siguientes preguntas para determinar el tipo de servicio
                        requieres y costo final.
                    </Text>
                    <Button
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO,
                        }}
                        title="INICIAR"
                        onPress={() => navigation.navigate('Domicile')}
                    />
                </Card>
            </View>
        </View>
    );
}

export default AppointmentsScreen;

const styles = StyleSheet.create({
    viewStyle: {
        width: '100%',
        height: '90%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    titleCard: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    image: {
        resizeMode: 'contain',
        width: 300,
        height: 270,
        //      backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO
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