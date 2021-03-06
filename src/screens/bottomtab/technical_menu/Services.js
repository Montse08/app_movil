import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TextInput, PermissionsAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import { Timeline } from 'react-native-just-timeline';
import Modal from 'react-native-modal';
import moment from 'moment';
import 'moment/locale/es-mx';
import { Data } from '../../../utils';
import AwesomeAlert from 'react-native-awesome-alerts';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import MapView, { Marker } from 'react-native-maps';
import { Colors } from '../../../utils';
import { FormButton, HeaderScreen } from '../../../components';

const ServicesScreen = ({ navigation }) => {
    const [dataCopy, setDataCopy] = useState(Data);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalNota, setModalNota] = useState(false);
    const [modalMaps, setModalMaps] = useState(false);
    const [alertPermission, setAlertPermission] = useState(false);
    const [alertMarcar, setAlertMarcar] = useState(false);
    const [alertInfo, setAlertInfo] = useState(false);
    const [alertFinalizar, setAlertFinalizar] = useState(false);
    const [alertCancelar, setAlertCancelar] = useState(false);
    const [alertNota, setAlertNota] = useState(false);
    const [alertReschedule, setAlertReschedule] = useState(false);
    const [show, setShow] = useState(false);
    const [reschedule, setReschedule] = useState(false);
    const [dateTimePicker, setDateTimePicker] = useState(false);
    const [stateCronometro, setStateCronometro] = useState('neutral');
    const [nota, setNota] = useState('');
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');
    const [mode, setMode] = useState('date')
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
        dataCopy_[selectedIndex].timeService = serviceTime;
        setDataCopy(dataCopy_);
        dataCopy.forEach((element, index) => {
            info.push({
                title: () => renderTitle(element.time, element.title, element.iconColor),
                description: () => renderDescription(element.description, index, element.timeService, element.enter_time),
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

    const rescheduleSave = () => {
        let dataCopy_ = dataCopy;
        let info = [];
        dataCopy_.splice(selectedIndex, 1);
        setDataCopy(dataCopy_);
        dataCopy.forEach((element, index) => {
            info.push({
                title: () => renderTitle(element.time, element.title, element.iconColor),
                description: () => renderDescription(element.description, index, element.timeService, element.enter_time),
                icon: {
                    style: {
                        backgroundColor: element.iconColor,
                        borderColor: element.iconBorderColor
                    }
                }
            });
        });
        setData(info);
        setAlertReschedule(false);
    }

    const confirmTime = (time) => {
        let templateTime = new Date(time);
        let dataCopy_ = dataCopy;
        let info = [];
        dataCopy_[selectedIndex].enter_time = templateTime;
        setDataCopy(dataCopy_);
        dataCopy.forEach((element, index) => {
            info.push({
                title: () => renderTitle(element.time, element.title, element.iconColor),
                description: () => renderDescription(element.description, index, element.timeService, element.enter_time),
                icon: {
                    style: {
                        backgroundColor: element.iconColor,
                        borderColor: element.iconBorderColor
                    }
                }
            });
        });
        setData(info);
        setShow(false);
    }

    const confirmDateTime = (dateTime) => {
        let templateDateTime = new Date(dateTime);
        if (mode == 'date') {
            setFecha(templateDateTime);
        } else {
            setHora(templateDateTime);
        }
        setDateTimePicker(false);
    }

    const renderDescription = (description, index, time, enter_time) => {
        return (
            <View style={{ flexBasis: '100%', width: '100%' }}>
                <Text style={{ color: '#000', marginTop: 5 }}>
                    {description}
                </Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: enter_time ? 0 : 10 }}>
                    <Text style={{ color: '#000' }}>Hora de entrada: {enter_time ? moment(enter_time).format('hh:mm a') : ''} </Text>
                    {enter_time ? null : (
                        <FormButton
                            icon='clock-o'
                            size={15}
                            color='#fff'
                            stylesContainer={{ position: 'absolute', width: '14%', right: 0, backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO, borderRadius: 100 }}
                            onPress={() => {
                                setShow(true);
                                setSelectedIndex(index);
                            }} />
                    )}
                </View>
                {time == '' ? (
                    <FormButton buttonTitle="Tomar tiempo del servicio"
                        onPress={() => {
                            setModalVisible(true);
                            setSelectedIndex(index);
                        }}
                        stylesText={{ fontSize: 15 }}
                        disabled={enter_time == '' ? true : false} />
                ) : (
                    <Text style={{ color: '#000' }}>Tiempo del servicio: {time}</Text>
                )}
                <View style={{ flexDirection: 'row' }}>
                    <FormButton
                        buttonTitle="Marcar"
                        stylesContainer={{ width: '48%' }}
                        stylesText={{ fontSize: 15 }}
                        onPress={() => {
                            setAlertMarcar(true);
                            setSelectedIndex(index);
                        }} />
                    <FormButton buttonTitle="Reprogramar"
                        stylesContainer={{ width: '48%', marginLeft: '4%' }}
                        stylesText={{ fontSize: 15 }}
                        disabled={time == '' ? false : true}
                        onPress={() => {
                            setReschedule(true);
                            setSelectedIndex(index);
                        }} />
                </View>
            </View>
        )
    }

    const renderTitle = (time, title, textColor) => {
        return (
            <View style={{ flexBasis: '100%', width: '100%' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flexBasis: '100%', width: '100%' }}>
                    <Text style={{ fontSize: 12, color: '#999', marginBottom: 7 }}>
                        {time}
                    </Text>
                    <FormButton
                        icon="map-marker"
                        size={15}
                        color="#fff"
                        stylesContainer={{ backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO, marginTop: 0, position: 'absolute', width: 35, right: 0, height: 35, borderRadius: 100 }}
                        onPress={() => setModalMaps(true)} />
                </View>
                <Text style={{ marginBottom: 0, color: textColor, fontWeight: 'bold', fontSize: 18 }}>
                    {title}
                </Text>
            </View>
        )
    }

    const renderData = () => {
        let info = [];
        dataCopy.forEach((element, index) => {
            info.push({
                title: () => renderTitle(element.time, element.title, element.iconColor),
                description: () => renderDescription(element.description, index, element.timeService, element.enter_time),
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
        requestPermissionAndroid();
    }, []);

    const requestPermissionAndroid = async () => {
        PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ).then(async checkLocation => {
            if (!checkLocation) {
                try {
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,);
                    if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
                        console.log('No dieron permiso');
                    }
                } catch (err) {
                    console.warn('error permissions android', err);
                }
            }
        })
    }

    return (
        <View style={styles.content}>
            <HeaderScreen title="Servicios"></HeaderScreen>
            <Card containerStyle={[styles.elevation, { borderRadius: 10 }]}>
                <Text style={styles.text}>
                    {moment(new Date()).locale('es-mx').format('dddd DD [de] MMMM [de] YYYY')}
                </Text>
                <Text style={{ color: '#000', fontSize: 16, marginTop: 15, fontWeight: 'bold' }}>Automovil: RENAULT/ UTZ-3456</Text>
            </Card>
            <Timeline data={data}
                contentContainerStyle={[styles.elevation, { flexBasis: '80%' }]}
                timeContainerStyle={{ display: 'none' }}
                style={{ marginTop: 15 }} />
            <DateTimePickerModal
                isVisible={show}
                date={new Date()}
                mode='time'
                is24hours={true}
                display='default'
                onConfirm={confirmTime}
                onCancel={() => setShow(false)}
                minimumDate={new Date()}
            />
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
                            <Card.Title style={{ fontSize: 25, color: Colors.PRIMARY_COLOR_AZULDELLOGO }}>Nota de la cancelaci??n</Card.Title>
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
                                    onChangeText={text => setNota(text)}
                                    textAlignVertical="top"
                                    selectionColor="#999" />
                            </View>
                            <FormButton
                                buttonTitle='Guardar'
                                onPress={() => {
                                    if (nota != '') {
                                        setModalNota(false);
                                        rescheduleSave();
                                    }
                                }}
                                disabled={nota != '' ? false : true} />
                        </Card>
                    </View>
                </View>
            </Modal>
            <Modal isVisible={reschedule}>
                <View style={{ alignContent: 'center' }}>
                    <Card>
                        <Card.Title style={{ fontSize: 18 }}>Reagendar cita</Card.Title>
                        <Card.Divider />
                        <Text style={{ color: '#000', marginBottom: 5, fontSize: 15 }}>Selecciona la fecha</Text>
                        <View style={{ flexDirection: 'row', alignContent: 'center', height: 40, marginBottom: 10 }}>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="dd/mm/yyyy"
                                placeholderTextColor="#999"
                                value={fecha ? moment(fecha).format('dddd DD [de] MMMM [de] YYYY') : ''}
                                editable={false} />
                            <FormButton
                                icon="calendar-o"
                                size={15}
                                color="#fff"
                                stylesContainer={{ marginTop: 0, width: '15%', backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO, borderRadius: 100 }}
                                onPress={() => {
                                    setMode('date');
                                    setDateTimePicker(true);
                                }} />
                        </View>
                        <Text style={{ color: '#000', marginBottom: 5, fontSize: 15 }}>Selecciona la hora</Text>
                        <View style={{ flexDirection: 'row', alignContent: 'center', height: 40 }}>
                            <TextInput
                                style={styles.input}
                                underlineColorAndroid="transparent"
                                placeholder="hh:mm"
                                placeholderTextColor="#999"
                                value={hora ? moment(hora).format('hh:mm a') : ''}
                                editable={false} />
                            <FormButton
                                icon="clock-o"
                                size={15}
                                color="#fff"
                                stylesContainer={{ marginTop: 0, width: '15%', backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO, borderRadius: 100 }}
                                onPress={() => {
                                    setMode('time');
                                    setDateTimePicker(true);
                                }} />
                        </View>
                        <View style={{ flexDirection: 'row', alignContent: 'center', height: 40, marginTop: 15 }}>
                            <FormButton
                                buttonTitle="Guardar"
                                stylesText={{ fontSize: 17 }}
                                stylesContainer={{ marginTop: 0, width: '48%', marginRight: '4%', backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO }}
                                onPress={() => {
                                    setAlertReschedule(true);
                                    setReschedule(false);
                                    setFecha('');
                                    setHora('');
                                }}
                                disabled={fecha && hora ? false : true} />
                            <FormButton
                                buttonTitle="Cancelar"
                                stylesText={{ fontSize: 17 }}
                                stylesContainer={{ marginTop: 0, width: '48%' }}
                                onPress={() => {
                                    setReschedule(false);
                                    setFecha('');
                                    setHora('');
                                }} />
                        </View>
                    </Card>
                </View>
            </Modal>
            <Modal isVisible={modalMaps}>
                <View style={{ alignContent: 'center' }}>
                    <Card>
                        <Card.Title style={{ fontSize: 18 }}>Ubicaci??n del servicio</Card.Title>
                        <Card.Divider />
                        <MapView
                            initialRegion={{
                                latitude: 21.1557399,
                                longitude: -86.8200826,
                                latitudeDelta: 0.0140,
                                longitudeDelta: 0.0131,
                            }}
                            showsUserLocation
                            loadingEnabled
                            style={{ width: '100%', height: 400 }}>
                            <Marker
                                coordinate={{ latitude: 21.1557399, longitude: -86.8200826 }}
                                title='Ubicaci??n de alguien'
                                description='Jiovany Rafael'
                            />
                        </MapView>
                        <View style={{ flexDirection: 'row', width: '100%' }}>
                            <FormButton
                                buttonTitle="Cancelar"
                                stylesText={{ fontSize: 15 }}
                                onPress={() => setModalMaps(false)} />
                        </View>
                    </Card>
                </View>
            </Modal>
            <DateTimePickerModal
                isVisible={dateTimePicker}
                date={new Date()}
                mode={mode}
                is24hours={true}
                display='default'
                onConfirm={confirmDateTime}
                onCancel={() => setDateTimePicker(false)}
                minimumDate={new Date()}
            />
            <AwesomeAlert
                show={alertMarcar}
                title='Marcar Servicio'
                message='??Como desea marcar este servicio?'
                showCancelButton={true}
                showConfirmButton={true}
                confirmText='Realizado'
                cancelText='Cancelado'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={() => {
                    setAlertMarcar(false);
                    setAlertCancelar(true);
                }}
                onConfirmPressed={() => {
                    if (dataCopy[selectedIndex].enter_time && dataCopy[selectedIndex].timeService) {
                        setAlertMarcar(false);
                        setAlertFinalizar(true);
                    } else {
                        setAlertMarcar(false);
                        setAlertInfo(true);
                    }
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor='#ff0000' />
            <AwesomeAlert
                show={alertInfo}
                title='Falta informaci??n'
                message='El tiempo del servicio o la hora de entrada a??n no han sido registradas'
                showConfirmButton={true}
                confirmText='Aceptar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onConfirmPressed={() => setAlertInfo(false)}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO} />
            <AwesomeAlert
                show={alertCancelar}
                title='Servicio cancelado'
                message='??Desea marcar este servicio como cancelado?'
                showCancelButton={true}
                showConfirmButton={true}
                confirmText='Aceptar'
                cancelText='Cancelar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={() => setAlertCancelar(false)}
                onConfirmPressed={() => {
                    setAlertCancelar(false);
                    setAlertNota(true);
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor='#ff0000' />
            <AwesomeAlert
                show={alertFinalizar}
                title='Servicio realizado'
                message='??Desea marcar este servicio como realizado?'
                showCancelButton={true}
                showConfirmButton={true}
                confirmText='Aceptar'
                cancelText='Cancelar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={() => setAlertFinalizar(false)}
                onConfirmPressed={() => {
                    setAlertFinalizar(false);
                    navigation.navigate('ServiceOrderForm', {
                        orderData: JSON.stringify(dataCopy[selectedIndex])
                    });
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor='#ff0000' />
            <AwesomeAlert
                show={alertNota}
                title='Nota'
                message='??Desea agregar una nota?'
                showCancelButton={true}
                showConfirmButton={true}
                confirmText='Aceptar'
                cancelText='Cancelar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={() => {
                    setAlertNota(false);
                    rescheduleSave();
                }}
                onConfirmPressed={() => {
                    setAlertNota(false);
                    setModalNota(true);
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor='#ff0000' />
            <AwesomeAlert
                show={alertReschedule}
                title='Reagendar'
                message='??Desea reagendar la cita?'
                showCancelButton={true}
                showConfirmButton={true}
                confirmText='Aceptar'
                cancelText='Cancelar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={() => setAlertReschedule(false)}
                onConfirmPressed={() => rescheduleSave()}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor='#ff0000' />
            <AwesomeAlert
                show={alertPermission}
                title='Permiso de ubicaci??n'
                message='Para poder acceder a la funci??n del mapa, necesita permitir el acceso a su ubicaci??n, ??qu?? desea hacer?'
                showCancelButton={true}
                showConfirmButton={true}
                confirmText='Permitir'
                cancelText='Cancelar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={() => setAlertPermission(false)}
                onConfirmPressed={() => {
                    setAlertPermission(false);
                    requestPermissionAndroid();
                    renderData();
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor='#ff0000' />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: '#999',
        textAlign: 'right'
    },
    content: {
        height: '100%',
        backgroundColor: '#fff'
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
    input: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        height: 40,
        marginBottom: 10,
        fontSize: 15,
        width: '80%',
        marginRight: '5%'
    },
    elevation: {
        shadowColor: '#470000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5
    }
})

export default ServicesScreen;