import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { Card, CheckBox } from "react-native-elements";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const ServiceOrderFormScreen = ({ route, navigation }) => {
    const { orderData } = route.params;
    const servicio = ['Base', 'Refuerzo', 'Factura', 'Monitoreo', 'Mantto', 'Recibo'];
    const [check, setCheck] = useState([false, false, false, false, false, false]);

    const setCheckValue = (index) => {
        let checkCopy = check;
        checkCopy[index] = !check[index];
        checkCopy.map((value) => console.log(value));
        setCheck(checkCopy);
        servicio.map((value, index) => renderCheck(value, index));
    }

    const renderCheck = (value, index) => {
        return (
            <CheckBox
                title={value}
                checked={check[index]}
                onPress={() => setCheckValue(index)}
                key={index}
            />
        )
    }

    return (
        <ScrollView>
            <Card containerStyle={{ borderRadius: 10 }}>
                <Card.Title style={{ fontSize: 18 }}>Fechas y Horas</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>Fecha de Solicitud</Text>
                <TextInput
                    style={styles.inputDisabled}
                    underlineColorAndroid="transparent"
                    value="02/marzo/2022"
                    editable={false}
                />
                <Text style={styles.text}>Fecha de Aplicación</Text>
                <TextInput
                    style={styles.inputDisabled}
                    underlineColorAndroid="transparent"
                    value="02/marzo/2022"
                    editable={false}
                />
                <Text style={styles.text}>Hora de entrada</Text>
                <Text style={styles.text}>Hora de salida</Text>
            </Card>
            <Card containerStyle={{ borderRadius: 10 }}>
                <Card.Title style={{ fontSize: 18 }}>Tipo de Servicio</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>Selecciona el tipo de servicio realizado</Text>
                {servicio.map((value, index) => renderCheck(value, index))}
            </Card>
        </ScrollView>
    )
}

export default ServiceOrderFormScreen;

const styles = StyleSheet.create({
    inputDisabled: {
        borderWidth: 1,
        color: '#999',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    },
    input: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    },
    text: {
        color: '#000',
        marginBottom: 5,
        fontSize: 15
    }
});