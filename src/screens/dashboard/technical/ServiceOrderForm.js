import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import { Card, CheckBox } from "react-native-elements";
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import AwesomeAlert from "react-native-awesome-alerts";
import { Colors, DataMetodo, DataPlagas, DataProductos, DataServicio } from "../../../utils";
import { FormButton } from "../../../components";

const ServiceOrderFormScreen = ({ route, navigation }) => {
    const { orderData } = route.params;
    const [data, setData] = useState();
    const [servicios, setServicios] = useState();
    const [plagas, setPlagas] = useState();
    const [metodos, setMetodos] = useState();
    const [productos, setProductos] = useState();
    const [datePicker, setDatePicker] = useState(false);
    const [show, setShow] = useState(false);
    const [endTime, setEndTime] = useState('');
    const [antes, setAntes] = useState('');
    const [durante, setDurante] = useState('');
    const [despues, setDespues] = useState('');
    const [reentrada, setReentrada] = useState('');
    const [recomendaciones, setRecomendaciones] = useState('');
    const [render, setRender] = useState(false);

    useEffect(() => {
        setServicios(DataServicio);
        setPlagas(DataPlagas);
        setMetodos(DataMetodo);
        setProductos(DataProductos);
        setData(JSON.parse(orderData));
    }, [])

    const confirmDateTime = (time) => {
        let templateTime = new Date(time);
        let enter_time = new Date(data.enter_time);
        if (templateTime < enter_time) {
            setShow(true);
        } else {
            setEndTime(templateTime);
        }
        setDatePicker(false);
    }

    const setValue = (state, index, data, type) => {
        setRender(!render);
        let copy = data;
        copy[index].state = !state;
        switch (type) {
            case "servicios":
                setServicios(copy);
                break;
            case "plagas":
                setPlagas(copy);
                break;
            case "metodos":
                setMetodos(copy);
                break;
            case "productos":
                setProductos(copy);
                break;
            default:
                return null;
        }
    }

    const renderCheck = (value, index, onPress, type) => {
        switch (type) {
            case "servicios":
                return (
                    <CheckBox
                        title={value.servicio}
                        checked={value.state}
                        onPress={onPress}
                        key={index}
                        checkedColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    />
                );
            case "plagas":
                return (
                    <CheckBox
                        title={value.plaga}
                        checked={value.state}
                        onPress={onPress}
                        key={index}
                        checkedColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    />
                );
            case "metodos":
                return (
                    <CheckBox
                        title={value.metodo}
                        checked={value.state}
                        onPress={onPress}
                        key={index}
                        checkedColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    />
                );
            case "productos":
                return (
                    <CheckBox
                        title={value.name}
                        checked={value.state}
                        onPress={onPress}
                        key={index}
                        checkedColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    />
                );
            default:
                return null;
        }
    }

    const RenderDataCheck = ({ data, type }) => {
        if (data) {
            return data.map((value, index) =>
                renderCheck(value, index, () => setValue(value.state, index, data, type), type)
            );
        }
        return null;
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
                <TextInput
                    style={styles.inputDisabled}
                    underlineColorAndroid="transparent"
                    placeholderTextColor="#999"
                    value={data ? moment(data.enter_time).format('hh:mm a') : 'hh:mm'}
                    editable={false}
                />
                <Text style={styles.text}>Hora de salida</Text>
                <View style={[styles.content, { marginBottom: 25 }]}>
                    <TextInput
                        style={[styles.input, { position: 'absolute', width: '85%' }]}
                        underlineColorAndroid="transparent"
                        placeholder="hh:mm"
                        placeholderTextColor="#999"
                        value={endTime ? moment(endTime).format('hh:mm a') : ''}
                        editable={false}
                    />
                    <FormButton
                        icon="clock-o"
                        size={15}
                        color="#fff"
                        stylesContainer={styles.button}
                        onPress={() => {
                            setDatePicker(true);
                        }} />
                </View>
            </Card>
            <Card containerStyle={{ borderRadius: 10 }}>
                <Card.Title style={{ fontSize: 18 }}>Tipo de Servicio</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>Selecciona el tipo de servicio realizado</Text>
                <RenderDataCheck type="servicios" data={servicios} />
            </Card>
            <Card containerStyle={{ borderRadius: 10 }}>
                <Card.Title style={{ fontSize: 18 }}>Plagas controladas</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>Selecciona las plagas controladas</Text>
                <RenderDataCheck type="plagas" data={plagas} />
            </Card>
            <Card containerStyle={{ borderRadius: 10 }}>
                <Card.Title style={{ fontSize: 18 }}>Método de aplicación</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>Selecciona los métodos de aplicación</Text>
                <RenderDataCheck type="metodos" data={metodos} />
            </Card>
            <Card containerStyle={{ borderRadius: 10 }}>
                <Card.Title style={{ fontSize: 18 }}>Productos</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>Selecciona los productos</Text>
                <RenderDataCheck type="productos" data={productos} />
            </Card>
            <DateTimePickerModal
                isVisible={datePicker}
                date={new Date()}
                mode='time'
                is24hours={true}
                display='default'
                onConfirm={confirmDateTime}
                onCancel={() => setDatePicker(false)}
                minimumDate={new Date()}
            />
            <AwesomeAlert
                show={show}
                title="¿Esa es tu hora de salida?"
                message="Tu hora de salida no puede ser antes de tu hora de entrada, selecciona una hora diferente"
                showConfirmButton={true}
                confirmText="Aceptar"
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onConfirmPressed={() => {
                    setShow(false);
                    setDatePicker(true);
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor='#3880ff' />
            <Card containerStyle={{ borderRadius: 10 }}>
                <Card.Title style={{ fontSize: 18 }}>Recomendaciones</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>Antes</Text>
                <TextInput
                    style={styles.inputMultiline}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                    value={antes}
                    onChangeText={text => setAntes(text)}
                    multiline
                    numberOfLines={4}
                    selectionColor="#999" />
                <Text style={styles.text}>Durante</Text>
                <TextInput
                    style={styles.inputMultiline}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                    value={durante}
                    onChangeText={text => setDurante(text)}
                    multiline
                    numberOfLines={4}
                    selectionColor="#999" />
                <Text style={styles.text}>Después</Text>
                <TextInput
                    style={styles.inputMultiline}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                    value={despues}
                    onChangeText={text => setDespues(text)}
                    multiline
                    numberOfLines={4}
                    selectionColor="#999" />
                <Text style={styles.text}>Tiempo de reentrada</Text>
                <TextInput
                    style={styles.inputMultiline}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                    value={reentrada}
                    onChangeText={text => setReentrada(text)}
                    multiline
                    numberOfLines={4}
                    selectionColor="#999" />
                <Text style={styles.text}>Recomendaciones generales</Text>
                <TextInput
                    style={styles.inputMultiline}
                    underlineColorAndroid="transparent"
                    textAlignVertical="top"
                    value={recomendaciones}
                    onChangeText={text => setRecomendaciones(text)}
                    multiline
                    numberOfLines={4}
                    selectionColor="#999" />
            </Card>
            <View style={{ alignItems: 'center', marginBottom: 20, marginLeft: 20, marginRight: 20 }}>
                <FormButton
                    buttonTitle="Aceptar"
                    stylesText={{ fontSize: 18 }}
                    onPress={() => navigation.navigate('Signature')} />
            </View>
        </ScrollView>
    );
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
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        width: '12%',
        margin: 0,
        position: 'absolute',
        right: 0,
        borderRadius: 100
    },
    content: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        marginTop: 20
    },
    inputMultiline: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        marginBottom: 10,
        fontSize: 15
    },
});