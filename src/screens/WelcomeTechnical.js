import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import Colors from '../utils/Colors';
import { Picker } from '@react-native-picker/picker';
import FormButton from '../components/FormButton';
import moment from 'moment';

const WelcomeTechnicalScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState(0);

    const aceptar = () => {
        if (selectedValue != 0) {
            navigation.navigate('Dashboard');
        }
    }

    return (
        <View style={styles.container}>
            <Card>
                <Image
                    source={require('../assets/logo.png')}
                    style={styles.logo}
                />
            </Card>
            <Card>
                <Card.Title style={{ fontSize: 25, color: Colors.PRIMARY_COLOR_AZULDELLOGO }}>¡Bienvenido Ángel!</Card.Title>
                <Text style={{ color: '#999', textAlign: 'center', marginTop: -10, marginBottom: 10 }}>
                    {moment(new Date()).locale('es-mx').format('dddd DD [de] MMMM [de] YYYY')}
                </Text>
                <Card.Divider />
                <Text style={{ color: '#000', fontSize: 18 }}>Elige tu unidad del día de hoy</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ width: '100%', color: '#000' }}
                    itemStyle={{ color: '#000', backgroundColor: '#fff' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    dropdownIconColor="#000" >
                    <Picker.Item label="Seleccionar" value={0} />
                    <Picker.Item label="Renault" value={1} />
                    <Picker.Item label="Audi" value={2} />
                    <Picker.Item label="Chevrolet" value={3} />
                </Picker>
                <FormButton buttonTitle='Aceptar' onPress={() => aceptar()} disabled={selectedValue != 0 ? false : true} />
            </Card>
        </View>
    )
}

export default WelcomeTechnicalScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    logo: {
        height: 90,
        width: '100%',
        resizeMode: 'contain',
        // marginBottom: 25
    }
})