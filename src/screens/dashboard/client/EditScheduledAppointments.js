import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { CheckBox } from 'react-native-elements';
import { Picker } from '@react-native-picker/picker';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Colors } from '../../../utils';
import { FormButton } from '../../../components';


const EditScheduledAppointmentsScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("se");
    const [selectedCheck, setSelectedCheck] = useState(0);
    const [alertCancelar, setAlertCancelar] = useState(false);
    const [event, setEvent] = useState(false);
    const [dateStart, setDateStart] = useState('');
    const [picker, setPicker] = useState("a")
    const [dateEnd, setDateEnd] = useState('');
    const [check, setCheck] = useState(0);
    const [dateText, setDateText] = useState('');
    const [selectedCheckd, setSelectedCheckd] = useState(0);
    const [datePicker, setDatePicker] = useState(false);
    const [timeText, setTimeText] = useState('');
    const [mode, setMode] = useState('date');
    const [typeDate, setTypeDate] = useState('');
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
    }
    return (
        <ScrollView>
            <View>
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
                    <Text style={styles.textJ}>Problema:</Text>
                    <View>
                        <TextInput
                            style={styles.inputMultiline}
                            underlineColorAndroid="transparent"
                            textAlignVertical="top"
                            multiline
                            numberOfLines={4}
                            selectionColor="#999" />
                    </View>
                </Card>
                <Card>
                    <Text style={styles.textJ}>Dirección:</Text>
                    <View>
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
                    </View>
                    <FormButton
                        buttonTitle="Agregar nueva dirección"
                        onPress={() => navigation.navigate('Addresses', {
                            'screen': 'EditScheduledAppointments'
                        })}
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
                <Card>
                    <Text style={styles.textJ}>Tipo de servicio:</Text>
                    <View>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ width: '100%', color: '#000' }}
                            itemStyle={{ color: '#000', backgroundColor: '#fff' }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            dropdownIconColor="#000" >
                            <Picker.Item label="Seleccionar" value="se" />
                            <Picker.Item label="Escolar" value="es" />
                            <Picker.Item label="Empresarial" value="em" />
                            <Picker.Item label="Residencial" value="re" />
                        </Picker>
                    </View>
                    <Text style={styles.textM}>Plantas:</Text>
                    <View>
                        <CheckBox
                            title='1'
                            checkedIcon='dot-circle-o'
                            checkedColor='#1b1464'
                            checked={selectedCheck == 0 ? true : false}
                            onPress={() => setSelectedCheck(0)}
                            uncheckedIcon='circle-o'
                        />
                        <CheckBox
                            title='2'
                            checkedIcon='dot-circle-o'
                            checkedColor='#1b1464'
                            checked={selectedCheck == 1 ? true : false}
                            onPress={() => setSelectedCheck(1)}
                            uncheckedIcon='circle-o'
                        />
                        <CheckBox
                            title='Más de 2'
                            checkedIcon='dot-circle-o'
                            checkedColor='#1b1464'
                            checked={selectedCheck == 2 ? true : false}
                            onPress={() => setSelectedCheck(2)}
                            uncheckedIcon='circle-o'
                        />
                    </View>
                    <Text style={styles.textM}>Alberca o palapa:</Text>
                    <CheckBox
                        title='Alberca'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheckd == 0 ? true : false}
                        onPress={() => setSelectedCheckd(0)}
                        uncheckedIcon='circle-o'
                    />
                    <CheckBox
                        title='Palapa'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheckd == 1 ? true : false}
                        onPress={() => setSelectedCheckd(1)}
                        uncheckedIcon='circle-o'
                    />
                    <CheckBox
                        title='Ninguna'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheckd == 2 ? true : false}
                        onPress={() => setSelectedCheckd(2)}
                        uncheckedIcon='circle-o'
                    />
                </Card>
                {event ? (
                    <Card>
                        <Text style={styles.textM}>Evento recurrente</Text>
                        <Card.Divider />
                        <Text style={styles.textM}>Fecha de comienzo</Text>
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
                        <Text style={styles.textM}>Fecha de finalización</Text>
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
                <Card>
                    <FormButton buttonTitle="Guardar"
                        onPress={() => setAlertCancelar(true)} />
                </Card>
                <AwesomeAlert
                    show={alertCancelar}
                    title='Editar'
                    message='¿Estás seguro de editar esta cita?'
                    showCancelButton={true}
                    showConfirmButton={true}
                    confirmText='Aceptar'
                    cancelText='Cancelar'
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    onCancelPressed={() => setAlertCancelar(false)}
                    onConfirmPressed={() => {
                        setAlertCancelar(false);
                        navigation.navigate('ScheduledAppointments');
                    }}
                    messageStyle={{ textAlign: 'center' }}
                    confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    cancelButtonColor='#ff0000' />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    textJ: {
        color: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    textM: {
        color: '#000',
        marginBottom: 10,
        fontSize: 15,
        marginTop: 10
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        width: '17%',
        margin: 0,
        position: 'absolute',
        right: 0
    },
    inputMultiline: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    inputDisabled: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    }, viewStyle: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
})

export default EditScheduledAppointmentsScreen;