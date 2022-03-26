import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, TextInput, Platform } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import { ScrollView } from 'react-native-gesture-handler';
import AwesomeAlert from 'react-native-awesome-alerts';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import 'moment/locale/es-mx';
import { Colors } from '../../../utils';
import { FormButton } from '../../../components';

const DateAndTimeScreen = ({ navigation, iconType }) => {
    const [alertCancelar, setAlertCancelar] = useState(false);
    const [picker, setPicker] = useState("a")
    const [selectedValue, setSelectedValue] = useState("d");
    const [datePicker, setDatePicker] = useState(false);
    const [mode, setMode] = useState('date');
    const [dateText, setDateText] = useState('');
    const [timeText, setTimeText] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');
    const [typeDate, setTypeDate] = useState('');
    const [check, setCheck] = useState(false);

    const confirmDateTime = (date) => {
        let currentDateTime = new Date(date);
        if (mode == 'date') {
            if (typeDate == 'seleccion') {
                setDateText(currentDateTime);
            } else if (typeDate == 'start') {
                setDateStart(currentDateTime);
            } else {
                setDateEnd(currentDateTime);
            }
        } else {
            setTimeText(currentDateTime);
        }
        setDatePicker(false);
        let hora = moment(timeText).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]').slice(11, -1);
        let fecha = moment(dateText).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]').slice(0, 11) + hora + "Z";
        console.log(timeText);
        console.log(dateText);
    }

    const calendarEvent = () => {
        let hora = moment(timeText).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]').slice(11, -1);
        let fecha = moment(dateText).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]').slice(0, 11) + hora + "Z";
        const eventConfig = {
            title: 'Cita de fumigación',
            startDate: fecha,
            endDate: fecha,
            location: 'Mi dirección',
            notes: `La cita de fumigación será el ${moment(dateText).locale('es-mx').format('dddd DD [de] MMMM [de] YYYY')}`
        };

        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
            .then(eventInfo => { navigation.navigate('Appointments') })
            .catch(error => { console.warn(error) });
    }

    return (
        <ScrollView>
            <View>
                {/* <Text style={styles.textTitle}>Seleccionar fecha y hora </Text> */}
                <Card>
                    <View style={styles.viewStyle}>
                        <FontAwesome name="calendar" size={22} color="#000" />
                        <Text style={styles.text}>
                            @contrerasmonce7@gmail.com
                        </Text>
                    </View>
                </Card>
                <Card>
                    <Text style={styles.textJ}>Selecciona la fecha</Text>
                    <View style={[styles.content, { marginBottom: 35 }]}>
                        <TextInput
                            style={[styles.inputDisabled, { position: 'absolute', width: '80%' }]}
                            underlineColorAndroid="transparent"
                            placeholder="yyyy-MM-DD"
                            placeholderTextColor="#999"
                            value={dateText ? moment(dateText).format('yyyy-MM-DD') : 'yyyy-MM-DD'}
                            editable={false} />
                        <FormButton
                            icon="calendar"
                            size={15}
                            color="#fff"
                            stylesContainer={styles.button}
                            onPress={() => {
                                setDatePicker(true);
                                setMode('date');
                                setTypeDate('seleccion');
                            }} />
                    </View>
                    <Text style={styles.textJ}>Selecciona la hora</Text>
                    <View style={[styles.content, { marginBottom: 30 }]}>
                        <TextInput
                            style={[styles.inputDisabled, { position: 'absolute', width: '80%' }]}
                            underlineColorAndroid="transparent"
                            placeholder="hh:mm"
                            placeholderTextColor="#999"
                            value={timeText ? moment(timeText).format('hh:mm a') : 'hh:mm'}
                            editable={false} />
                        <FormButton
                            icon="clock-o"
                            size={15}
                            color="#fff"
                            stylesContainer={styles.button}
                            onPress={() => {
                                setDatePicker(true);
                                setMode('time');
                            }} />
                    </View>
                </Card>
                <Card>
                    <Text style={styles.textJ}>Marca si es un evento recurrente</Text>
                    <Card.Divider />
                    <CheckBox
                        title='Si'
                        checkedColor='#1b1464'
                        checked={check}
                        onPress={() => setCheck(!check)}
                    />
                </Card>
                <DateTimePickerModal
                    isVisible={datePicker}
                    date={new Date()}
                    mode={mode}
                    is24hours={true}
                    display='default'
                    onConfirm={confirmDateTime}
                    onCancel={() => setDatePicker(false)}
                    minimumDate={new Date()}
                />
                {check ? (
                    <Card>
                        <Text style={styles.textJ}>Fecha de comienzo</Text>
                        <View style={[styles.content, { marginBottom: 35 }]}>
                            <TextInput
                                style={[styles.inputDisabled, { position: 'absolute', width: '80%' }]}
                                underlineColorAndroid="transparent"
                                placeholder="yyyy-MM-DD"
                                placeholderTextColor="#999"
                                value={dateStart ? moment(dateStart).format('yyyy-MM-DD') : 'yyyy-MM-DD'}
                                editable={false} />
                            <FormButton
                                icon="calendar"
                                size={15}
                                color="#fff"
                                stylesContainer={styles.button}
                                onPress={() => {
                                    setDatePicker(true);
                                    setMode('date');
                                    setTypeDate('start');
                                }} />
                        </View>
                        <Text style={styles.textJ}>Fecha de finalización</Text>
                        <View style={[styles.content, { marginBottom: 35 }]}>
                            <TextInput
                                style={[styles.inputDisabled, { position: 'absolute', width: '80%' }]}
                                underlineColorAndroid="transparent"
                                placeholder="yyyy-MM-DD"
                                placeholderTextColor="#999"
                                value={dateEnd ? moment(dateEnd).format('yyyy-MM-DD') : 'yyyy-MM-DD'}
                                editable={false} />
                            <FormButton
                                icon="calendar"
                                size={15}
                                color="#fff"
                                stylesContainer={styles.button}
                                onPress={() => {
                                    setDatePicker(true);
                                    setMode('date');
                                    setTypeDate('end');
                                }} />
                        </View>
                        <Text style={styles.textJ}>Repetir</Text>
                        <View>
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Mensualmente"
                                placeholderTextColor="#999"
                                editable={false} />
                        </View>
                        <Text style={styles.textJ}>Los dias:</Text>
                        <View>
                            <Picker
                                selectedValue={picker}
                                style={styles.picker}
                                itemStyle={{ color: '#000', backgroundColor: '#fff' }}
                                onValueChange={(value, itemIndex) => setPicker(value)}
                                dropdownIconColor="#000" >
                                <Picker.Item label="1" value="a" />
                                <Picker.Item label="2" value="c" />
                                <Picker.Item label="3" value="b" />
                                <Picker.Item label="4" value="e" />
                                <Picker.Item label="5" value="f" />
                                <Picker.Item label="6" value="g" />
                                <Picker.Item label="7" value="h" />
                                <Picker.Item label="8" value="i" />
                                <Picker.Item label="9" value="j" />
                                <Picker.Item label="10" value="k" />
                                <Picker.Item label="11" value="l" />
                                <Picker.Item label="12" value="m" />
                                <Picker.Item label="13" value="n" />
                                <Picker.Item label="14" value="o" />
                                <Picker.Item label="15" value="p" />
                                <Picker.Item label="16" value="q" />
                                <Picker.Item label="17" value="r" />
                                <Picker.Item label="18" value="s" />
                                <Picker.Item label="19" value="t" />
                                <Picker.Item label="20" value="u" />
                                <Picker.Item label="21" value="v" />
                                <Picker.Item label="22" value="w" />
                                <Picker.Item label="23" value="x" />
                                <Picker.Item label="24" value="y" />
                                <Picker.Item label="25" value="z" />
                                <Picker.Item label="26" value="ed" />
                                <Picker.Item label="27" value="de" />
                                <Picker.Item label="28" value="vc" />
                                <Picker.Item label="29" value="cv" />
                                <Picker.Item label="30" value="bc" />
                                <Picker.Item label="31" value="xs" />
                            </Picker>

                        </View>
                        <Text style={styles.textJ}>Por cuantos meses:</Text>
                        <View>
                            <TextInput
                                style={[styles.inputDisabled, { width: '100%' }]}
                                underlineColorAndroid="transparent"
                                editable={true}
                                keyboardType="numeric"
                                maxLength={2} />
                        </View>

                    </Card>
                ) : null}
                <FormButton
                    buttonTitle="ACEPTAR"
                    stylesContainer={{
                        marginRight: '5%',
                        marginLeft: '5%',
                        width: '90%',
                        marginBottom: 10
                    }}
                    onPress={() => setAlertCancelar(true)} />
                <AwesomeAlert
                    show={alertCancelar}
                    title='Cita'
                    message='¿Estás seguro de agendar la cita?'
                    showCancelButton={true}
                    showConfirmButton={true}
                    confirmText='Aceptar'
                    cancelText='Cancelar'
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    onCancelPressed={() => setAlertCancelar(false)}
                    onConfirmPressed={() => {
                        setAlertCancelar(false);
                        calendarEvent();
                    }}
                    messageStyle={{ textAlign: 'center' }}
                    confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    cancelButtonColor='#ff0000' />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    picker: {
        width: '100%',
        color: '#000',
        borderWidth: 1,
        marginBottom: 10,
        borderColor: '#000'
    },

    inputDisabled: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 13,
        width: -5,
        padding: 8,
    },
    content: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    textTitle: {
        fontFamily: 'Cochin',
        fontSize: 20,
        marginBottom: 10,
        color: '#000',
        textAlign: 'center',
        marginTop: 15
    },
    viewStyle: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewCalendar: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textJ: {
        color: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        width: '17%',
        margin: 0,
        position: 'absolute',
        right: 0
    }
});

export default DateAndTimeScreen;
