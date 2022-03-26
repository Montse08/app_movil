import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import moment from 'moment';
import 'moment/locale/es-mx';
import { Colors, ConectionApi } from '../../utils';
import { FormButton } from '../../components';

const WelcomeTechnicalScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState(-1);
    const [kilometraje, setKilometraje] = useState('');
    const [automobiles, setAutomobiles] = useState([]);

    const aceptar = () => {
        if (selectedValue != 0) {
            navigation.navigate('Dashboard');
            setSelectedValue(0);
            setKilometraje('');
        }
    }

    const getAutomobiles = async () => {
        await ConectionApi.list_automobile().then(
            resp => {
                setAutomobiles(resp);
            }
        );
    }

    useEffect(() => {
        getAutomobiles();
    }, []);

    return (
        <View style={styles.container}>
            <Card>
                <Image
                    source={require('../../assets/logo.png')}
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
                    onValueChange={(itemValue, itemIndex) => {
                        setSelectedValue(itemValue);
                        console.log(itemValue);
                    }}
                    dropdownIconColor="#000" >
                    <Picker.Item label="Seleccionar" value={-1} />
                    {automobiles.map(value => (
                        <Picker.Item key={value.id} label={`${value.model} ${value.plate}`} value={value.id} />
                    ))}
                </Picker>
                <Text style={{ color: '#000', fontSize: 18 }}>Introduce el kilometraje</Text>
                <TextInput
                    style={[styles.input, { paddingLeft: 10, marginTop: 5 }]}
                    underlineColorAndroid="transparent"
                    placeholder="Kilometraje"
                    placeholderTextColor="#999"
                    onChangeText={text => setKilometraje(text)}
                    value={kilometraje == '' ? '' : kilometraje}
                    keyboardType="numeric"
                />
                <FormButton buttonTitle='Aceptar' onPress={() => aceptar()} disabled={selectedValue != 0 && kilometraje != '' ? false : true} />
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
        resizeMode: 'contain'
    },
    input: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    }
})