import React, { useState, useRef } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HeaderScreen } from '../components';
import { Card } from 'react-native-elements';
import { Timeline } from 'react-native-just-timeline';
import FormButton from '../components/FormButton';
import Modal from 'react-native-modal';
import Colors from '../utils/Colors';
import moment from "moment";

const ServicesScreen = () => {
    const timerRef = useRef(null);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState("d");
    const [stateCronometro, setStateCronometro] = useState(false);
    const [segundos, setSegundos] = useState(59);
    const [minutos, setMinutos] = useState(59);
    const [horas, setHoras] = useState(1);
    const [intervalo, setIntervalo] = useState();
    const intervalRef = useRef();

    // const data = [
    //     { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
    //     { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
    //     { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
    //     { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' },
    //     { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
    // ];

    const countHoras = () => {
        setHoras((prevHoras) => {
            return prevHoras + .5;
        })
    }

    const countMinutos = () => {
        setMinutos((prevMinutos) => {
            if (prevMinutos + 1 == 60) {
                countHoras();
                return 0;
            }
            return prevMinutos + .5;
        });
    }

    const countSegundos = () => {
        console.log(segundos);
        setSegundos((prevSegundos) => {
            if (prevSegundos + 1 == 60) {
                countMinutos();
                return 0;
            }
            return prevSegundos + 1;
        });
    }

    const start = () => {
        console.log('Start');
        setStateCronometro(!stateCronometro);
        setIntervalo(setInterval(() => countSegundos(), 1000));
    }

    const stop = () => {
        console.log('Stop');
        setStateCronometro(!stateCronometro);
        clearInterval(intervalo);
    }

    const renderContent = () => {
        return (
            <View>
                <Text style={{ color: '#000', marginTop: 5 }}>Av. San Ignacio, Calle 32</Text>
                <FormButton buttonTitle="Tomar tiempo del servicio"
                    onPress={() => setModalVisible(!modalVisible)}
                    stylesText={{ fontSize: 15 }}
                    stylesContainer={{ height: 40 }} />
            </View>
        )
    }

    const data = [
        {
            title: () => (
                <View>
                    <Text style={{ fontSize: 10, color: '#999', marginBottom: 7 }}>
                        Mar 7, 2020 9:00 AM
                    </Text>
                    <Text style={{ marginBottom: 0, color: '#d2584b', fontWeight: 'bold' }}>
                        Item Deleted Event
                    </Text>
                </View>
            ),
            description: () => renderContent(),
            icon: {
                style: {
                    backgroundColor: 'red'
                }
            }
        },
    ];



    return (
        <View style={styles.content}>
            <HeaderScreen title="Servicios"></HeaderScreen>
            <Card>
                <Text style={styles.text}>Miércoles 12 Enero 2022</Text>
                <Text style={{ color: '#000', fontSize: 16, marginTop: 15, fontWeight: 'bold' }}>RENAULT/ UTZ-3456</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={{ width: '100%', color: '#000' }}
                    itemStyle={{ color: '#000', backgroundColor: '#fff' }}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    dropdownIconColor="#000" >
                    <Picker.Item label="Día" value="d" />
                    <Picker.Item label="Semana" value="s" />
                    <Picker.Item label="Mes" value="m" />
                </Picker>
            </Card>
            <Timeline data={data}
                contentContainerStyle={{ flexBasis: '80%' }}
                timeContainerStyle={{ display: 'none' }}
                style={{ marginTop: 15 }} />
            <Modal isVisible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Card>
                            <Card.Title style={{ fontSize: 25, color: Colors.PRIMARY_COLOR_AZULDELLOGO }}>Tiempo del servicio</Card.Title>
                            <Card.Divider />
                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10 }}>
                                <Text style={{ color: '#000', fontSize: 18, marginLeft: 15 }}>
                                    {horas < 10 ? `0${horas}` : horas}:
                                    {minutos < 10 ? `0${minutos}` : minutos}:
                                    {segundos < 10 ? `0${segundos}` : segundos}
                                </Text>
                                <FormButton
                                    icon={stateCronometro ? 'stop-circle-o' : 'play-circle-o'}
                                    size={22}
                                    color='#fff'
                                    stylesContainer={{ height: 45, width: 40, right: 0, position: 'absolute', backgroundColor: stateCronometro ? Colors.PRIMARY_COLOR_NARANJALOGO : '#038513' }}
                                    onPress={() => stateCronometro ? stop() : start()} />
                            </View>

                            <FormButton
                                buttonTitle='Cerrar'
                                stylesContainer={{ marginTop: 20 }}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    setSegundos(0);
                                    setMinutos(0);
                                    setHoras(0);
                                }} />
                        </Card>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#999',
        textAlign: 'right'
    },
    content: {
        // backgroundColor: '#fff',
        height: '100%'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
    },
    modalView: {
        alignItems: "center",

        shadowRadius: 4,
        elevation: 5
    },
})

export default ServicesScreen;