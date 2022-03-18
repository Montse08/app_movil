import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { HeaderScreen } from '../components';
import { Card } from 'react-native-elements';
import { Timeline } from 'react-native-just-timeline';
import FormButton from '../components/FormButton';
import Modal from 'react-native-modal';
import Colors from '../utils/Colors';
import moment from 'moment';
import { Data } from '../utils';
import AwesomeAlert from 'react-native-awesome-alerts';

const ServicesScreen = ({ navigation }) => {
    const [dataCopy, setDataCopy] = useState(Data);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalNota, setModalNota] = useState(false);
    const [alertMarcar, setAlertMarcar] = useState(false);
    const [alertFinalizar, setAlertFinalizar] = useState(false);
    const [alertCancelar, setAlertCancelar] = useState(false);
    const [alertNota, setAlertNota] = useState(false);
    const [stateCronometro, setStateCronometro] = useState('neutral');
    const [selectedValue, setSelectedValue] = useState("d");
    const [nota, setNota] = useState('');
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [intervalo, setIntervalo] = useState();
    const [data, setData] = useState();

    const countHoras = () => {
        setHoras((prevHoras) => {
            return prevHoras + .5;
        })
    }

    const countMinutos = () => {
        setMinutos((prevMinutos) => {
            if (prevMinutos + 1 == 60) {
                countHoras();
                return - .5;
            }
            return prevMinutos + .5;
        });
    }

    const countSegundos = () => {
        setSegundos((prevSegundos) => {
            if (prevSegundos + 1 == 60) {
                countMinutos();
                return 0;
            }
            return prevSegundos + 1;
        });
    }

    const start = () => {
        setStateCronometro('start');
        setIntervalo(setInterval(() => countSegundos(), 1000));
    }

    const pause = () => {
        setStateCronometro('pause');
        clearInterval(intervalo);
    }

    const restart = () => {
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
        setStateCronometro('start');
        setIntervalo(setInterval(() => countSegundos(), 1000));
    }

    const stop = () => {
        setStateCronometro('stop');
        clearInterval(intervalo);
    }

    const clear = () => {
        if (stateCronometro == 'start') {
            clearInterval(intervalo);
        }
        setModalVisible(false)
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
        setStateCronometro('neutral');
    }

    const save = () => {
        let serviceTime = '';
        if (horas < 10) {
            serviceTime = `0${horas}:`
        } else {
            serviceTime = `${horas}:`
        }
        if (minutos < 10) {
            serviceTime = `${serviceTime}0${minutos}:`
        } else {
            serviceTime = `${serviceTime}${minutos}:`
        }
        if (segundos < 10) {
            serviceTime = `${serviceTime}0${segundos}`
        } else {
            serviceTime = `${serviceTime}${segundos}`
        }
        let dataCopy_ = dataCopy;
        let info = [];
        dataCopy_[selectedIndex] = {
            "id": dataCopy[selectedIndex].id,
            "title": dataCopy[selectedIndex].title,
            "time": dataCopy[selectedIndex].time,
            "iconColor": dataCopy[selectedIndex].iconColor,
            "description": dataCopy[selectedIndex].description,
            "timeService": serviceTime,
            "iconBorderColor": dataCopy[selectedIndex].iconBorderColor
        }
        setDataCopy(dataCopy_);
        dataCopy.forEach((element) => {
            info.push({
                title: () => renderTitle(element.time, element.title, element.iconColor),
                description: () => renderDescription(element.description, element.id, element.timeService),
                icon: {
                    style: {
                        backgroundColor: element.iconColor,
                        borderColor: element.iconBorderColor
                    }
                }
            });
        });
        setData(info);
        clear();
    }

    const renderDescription = (description, index, time) => {
        return (
            <View>
                <Text style={{ color: '#000', marginTop: 5 }}>
                    {description}
                </Text>
                {time == '' ? (
                    <FormButton buttonTitle="Tomar tiempo del servicio"
                        onPress={() => {
                            setModalVisible(true);
                            setSelectedIndex(index - 1);
                        }}
                        stylesText={{ fontSize: 15 }}
                        stylesContainer={{ height: 40, position: 'absolute', right: 0, left: 0, marginTop: 30 }} />
                ) : (
                    <Text style={{ color: '#000', marginTop: 5 }}>Tiempo del servicio: {time}</Text>
                )}
                <View style={{ flexDirection: 'row', width: 256, marginTop: time == '' ? 45 : 0, alignContent: 'space-between' }}>
                    <FormButton
                        buttonTitle="Marcar"
                        stylesContainer={{ width: 120, height: 40 }}
                        stylesText={{ fontSize: 15 }}
                        onPress={() => {
                            setAlertMarcar(true);
                            setSelectedIndex(index - 1);
                        }} />
                    <FormButton
                        buttonTitle="Reprogramar"
                        stylesContainer={{ width: 120, height: 40, right: 5, position: 'absolute' }}
                        stylesText={{ fontSize: 15 }}
                        disabled={time == '' ? false : true} />
                </View>
            </View>
        )
    }

    const renderTitle = (time, title, textColor) => {
        return (
            <View>
                <Text style={{ fontSize: 12, color: '#999', marginBottom: 7 }}>
                    {time}
                </Text>
                <Text style={{ marginBottom: 0, color: textColor, fontWeight: 'bold', fontSize: 18 }}>
                    {title}
                </Text>
            </View>
        )
    }

    const renderData = () => {
        let info = [];
        dataCopy.forEach(element => {
            info.push({
                title: () => renderTitle(element.time, element.title, element.iconColor),
                description: () => renderDescription(element.description, element.id, element.timeService),
                icon: {
                    style: {
                        backgroundColor: element.iconColor,
                        borderColor: element.iconBorderColor
                    }
                }
            });

        });
        setData(info);
    }

    useEffect(() => {
        renderData();
    }, []);

    const alert = (show, title, message, confirmText, cancelText, showCancelButton, showConfirmButton, onCancelPressed, onConfirmPressed, colorButtomConfirm, colorButtomCancel) => {
        return (
            <AwesomeAlert
                show={show}
                title={title}
                message={message}
                showCancelButton={showCancelButton}
                showConfirmButton={showConfirmButton}
                confirmText={confirmText}
                cancelText={cancelText}
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={onCancelPressed}
                onConfirmPressed={onConfirmPressed}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={colorButtomConfirm}
                cancelButtonColor={colorButtomCancel} />
        );
    }

    return (
        <View style={styles.content}>
            <HeaderScreen title="Servicios"></HeaderScreen>
            <Card>
                <Text style={styles.text}>
                    {moment(new Date()).locale('es-mx').format('dddd DD [de] MMMM [de] YYYY')}
                </Text>
                <Text style={{ color: '#000', fontSize: 16, marginTop: 15, fontWeight: 'bold' }}>Automovil: RENAULT/ UTZ-3456</Text>
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
                                {stateCronometro == 'neutral' || stateCronometro == 'pause' ? (
                                    <FormButton
                                        icon='play-circle-o'
                                        size={22}
                                        color='#fff'
                                        stylesContainer={{ height: 45, width: 40, right: 0, position: 'absolute', backgroundColor: '#038513' }}
                                        onPress={() => start()} />
                                ) : null}
                                {stateCronometro == 'start' ? (
                                    <FormButton
                                        icon='stop-circle-o'
                                        size={22}
                                        color='#fff'
                                        stylesContainer={{ height: 45, width: 40, right: 0, position: 'absolute', backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO }}
                                        onPress={() => stop()} />
                                ) : null}
                                {stateCronometro == 'start' ? (
                                    <FormButton
                                        icon='pause-circle-o'
                                        size={22}
                                        color='#fff'
                                        stylesContainer={{ height: 45, width: 40, right: 50, position: 'absolute', backgroundColor: '#096C89' }}
                                        onPress={() => pause()} />
                                ) : null}
                                {stateCronometro == 'stop' || stateCronometro == 'pause' ? (
                                    <FormButton
                                        icon='repeat'
                                        size={22}
                                        color='#fff'
                                        stylesContainer={{ height: 45, width: 40, right: stateCronometro == 'pause' ? 50 : 0, position: 'absolute', backgroundColor: '#096C89' }}
                                        onPress={() => restart()} />
                                ) : null}
                            </View>
                            <View style={{ flexDirection: 'row', alignContent: 'space-between', width: '100%', marginTop: 10 }}>
                                <FormButton
                                    buttonTitle='Cerrar'
                                    stylesContainer={{ marginTop: 20, height: 45, width: 100 }}
                                    onPress={() => clear()} />
                                <FormButton
                                    buttonTitle='Guardar'
                                    stylesContainer={{ marginTop: 20, height: 45, width: 100, position: 'absolute', right: 0, backgroundColor: '#038513' }}
                                    onPress={() => save()}
                                    disabled={stateCronometro == 'stop' || stateCronometro == 'pause' ? false : true} />
                            </View>

                        </Card>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={modalNota}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Card>
                            <Card.Title style={{ fontSize: 25, color: Colors.PRIMARY_COLOR_AZULDELLOGO }}>Nota de la cancelación</Card.Title>
                            <Card.Divider />
                            <View
                                style={{
                                    borderColor: '#000', borderWidth: 1
                                }}>
                                <TextInput
                                    multiline
                                    numberOfLines={4}
                                    style={{ color: '#000' }}
                                    maxLength={130}
                                    onChangeText={text => setNota(text)} />
                            </View>
                            <FormButton
                                buttonTitle='Guardar'
                                onPress={() => {
                                    if (nota != '') {
                                        setModalNota(false);
                                    }
                                }}
                                disabled={nota != '' ? false : true} />
                        </Card>
                    </View>
                </View>
            </Modal>
            {alert(
                alertMarcar,
                'Marcar Servicio',
                '¿Como desea marcar este servicio?',
                'Realizado',
                'Cancelado',
                true,
                true,
                () => {
                    setAlertMarcar(false);
                    setAlertCancelar(true);
                },
                () => {
                    setAlertMarcar(false);
                    setAlertFinalizar(true);
                },
                '#27960B',
                '#ff0000'
            )}
            {alert(
                alertCancelar,
                'Servicio cancelado',
                '¿Desea marcar este servicio como cancelado?',
                'Aceptar',
                'Cancelar',
                true,
                true,
                () => {
                    setAlertCancelar(false);
                },
                () => {
                    setAlertCancelar(false);
                    setAlertNota(true);
                },
                '#3880ff',
                '#ff0000'
            )}
            {alert(
                alertFinalizar,
                'Servicio realizado',
                '¿Desea marcar este servicio como realizado?',
                'Aceptar',
                'Cancelar',
                true,
                true,
                () => {
                    setAlertFinalizar(false);
                },
                () => {
                    setAlertFinalizar(false);
                    navigation.navigate('ServiceOrderForm', {
                        orderData: dataCopy[selectedIndex]
                    });
                },
                '#3880ff',
                '#ff0000'
            )}
            {alert(
                alertNota,
                'Nota',
                '¿Desea agregar una nota?',
                'Aceptar',
                'Cancelar',
                true,
                true,
                () => {
                    setAlertNota(false);
                },
                () => {
                    setAlertNota(false);
                    setModalNota(true);
                },
                '#3880ff',
                '#ff0000'
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#999',
        textAlign: 'right'
    },
    content: {
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