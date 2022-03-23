import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderScreen } from '../components';
import moment from 'moment';
import 'moment/locale/es-mx';
import { Card } from 'react-native-elements';
import { Timeline } from 'react-native-just-timeline';
import { DataKilometraje } from '../utils';
import Colors from '../utils/Colors';
import FormButton from '../components/FormButton';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const MileageScreen = () => {
    const [dataCopy, setDataCopy] = useState(DataKilometraje);
    const [data, setData] = useState();
    const [modal, setModal] = useState(false);
    const [exitTime, setExitTime] = useState('');
    const [timePicker, setTimePicker] = useState(false);
    const [kilometraje, setKilometraje] = useState('');

    const renderTitle = (date) => {
        return (
            <View>
                <Text style={{ color: '#999', fontSize: 13, fontWeight: 'bold', marginBottom: 5 }}>Fecha: {date}</Text>
            </View>
        );
    }

    const renderDescription = (start, end, gasolina) => {
        return (
            <View>
                <Text style={styles.text}>
                    Kilometraje de inicio: <Text style={{ fontWeight: 'normal' }}>
                        {start}
                    </Text>
                </Text>
                <Text style={styles.text}>
                    Kilometraje de salida: <Text style={{ fontWeight: 'normal' }}>
                        {end}
                    </Text>
                </Text>
                <Text style={styles.text}>
                    Gasolina consumida: <Text style={{ fontWeight: 'normal' }}>
                        {gasolina}
                    </Text>
                </Text>
            </View>
        )
    }

    const renderData = () => {
        let info = [];
        dataCopy.forEach((element, index) => {
            info.push({
                title: () => renderTitle(element.date),
                description: () => renderDescription(element.kilometraje_start, element.kilometraje_end, element.gasolina),
                icon: {
                    style: {
                        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
                        borderColor: "#D4D3EC"
                    }
                }
            });

        });
        setData(info);
    }

    useEffect(() => {
        renderData();
    }, []);

    const confirmDateTime = (time) => {
        let templateTime = new Date(time);
        setExitTime(templateTime);
        setTimePicker(false);
    }

    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: '#fff' }}>
            <HeaderScreen title="Kilometraje"></HeaderScreen>
            <Text style={{ color: '#999', marginLeft: 20, marginTop: 10 }}>{moment(new Date()).locale('es-mx').format('dddd DD [de] MMMM [de] YYYY')}</Text>
            <Card containerStyle={[styles.elevation, { borderRadius: 10 }]}>
                <Card.Title style={{ color: '#000', fontSize: 18 }}>Datos del automóvil</Card.Title>
                <Card.Divider />
                <Text style={{ color: '#000', fontWeight: 'bold', marginBottom: 10 }}>
                    Unidad: <Text style={{ color: '#000', fontWeight: 'normal' }}>
                        RENAULT
                    </Text>
                </Text>
                <Text style={{ color: '#000', fontWeight: 'bold', marginBottom: 10 }}>
                    Placas: <Text style={{ color: '#000', fontWeight: 'normal' }}>
                        UTM-6688
                    </Text>
                </Text>
                <FormButton
                    buttonTitle="Marcar horario de salida"
                    stylesText={{ fontSize: 15 }}
                    stylesContainer={{ borderRadius: 10, marginTop: 0 }}
                    onPress={() => setModal(true)} />
            </Card>
            <Timeline data={data}
                contentContainerStyle={[styles.elevation, { flexBasis: '80%' }]}
                timeContainerStyle={{ display: 'none' }}
                style={{ marginTop: 15 }} />
            <Modal isVisible={modal}>
                <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                    <Card containerStyle={{ borderRadius: 10 }}>
                        <Card.Title style={{ fontSize: 18, color: "#000" }}>Finalizar Jornada</Card.Title>
                        <Card.Divider />
                        <Text style={{ color: "#000", marginBottom: 5 }}>Ingresa la hora de salida</Text>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="hh:mm"
                                placeholderTextColor="#999"
                                editable={false}
                                value={exitTime ? moment(exitTime).format('hh:mm a') : ''}
                                style={styles.input} />
                            <FormButton
                                icon="clock-o"
                                size={15}
                                color="#fff"
                                stylesContainer={{ marginTop: 0, width: '15%', height: 40, borderRadius: 100, backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO }}
                                onPress={() => setTimePicker(true)} />
                        </View>
                        <Text style={{ color: '#000', marginBottom: 5, marginTop: 10 }}>Introduce el kilometraje</Text>
                        <TextInput
                            style={[styles.input, { paddingLeft: 10, marginTop: 5, width: '100%', marginRight: 0 }]}
                            underlineColorAndroid="transparent"
                            placeholder="Kilometraje"
                            placeholderTextColor="#999"
                            onChangeText={text => setKilometraje(text)}
                            value={kilometraje == '' ? '' : kilometraje}
                            keyboardType="numeric"
                        />
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <FormButton
                                buttonTitle="Aceptar"
                                stylesText={{ fontSize: 15 }}
                                stylesContainer={{ backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO, width: '48%', marginRight: '4%' }}
                                onPress={() => setModal(false)} />
                            <FormButton
                                buttonTitle="Cancelar"
                                stylesText={{ fontSize: 15 }}
                                stylesContainer={{ backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO, width: '48%' }}
                                onPress={() => setModal(false)} />
                        </View>
                    </Card>
                </View>
            </Modal>
            <DateTimePickerModal
                isVisible={timePicker}
                date={new Date()}
                mode='time'
                is24hours={true}
                display='default'
                onConfirm={confirmDateTime}
                onCancel={() => setTimePicker(false)}
                minimumDate={new Date()}
            />
        </View>
    );
}

export default MileageScreen;

const styles = StyleSheet.create({
    elevation: {
        shadowColor: '#470000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    text: {
        color: '#000',
        fontSize: 15,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    input: {
        color: "#000",
        width: '81%',
        marginRight: '4%',
        height: 40,
        borderColor: '#000',
        borderRadius: 10,
        borderWidth: 1,
        paddingLeft: 10
    }
})