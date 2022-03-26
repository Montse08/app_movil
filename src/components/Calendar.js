import React, { useState } from "react";
import { Colors, Globals } from "../utils";
import { CalendarList, LocaleConfig } from "react-native-calendars";
import { FlatList, Text, View } from "react-native";
import Modal from 'react-native-modal';
import AwesomeAlert from "react-native-awesome-alerts";
import moment from 'moment';
import 'moment/locale/es-mx';
import { Card } from "react-native-elements";
import FormButton from "./FormButton";

LocaleConfig.locales['es'] = Globals.CALENDAR;
LocaleConfig.defaultLocale = 'es'

const CalendarComponent = ({ data }) => {
    const dataServices = data;
    const [modal, setModal] = useState(false);
    const [alert, setAlert] = useState(false);
    const [date, setDate] = useState('');

    const searchInfoForDate = (day) => {
        setDate(day.dateString);
        if (dataServices[day.dateString]) {
            setModal(true);
        } else {
            setAlert(true);
        }
    }

    const renderDate = ({ item }) => {
        return (
            <Card>
                <Card.Title style={{ color: '#fff', backgroundColor: item.color }}>{item.type}</Card.Title>
                <Card.Divider />
                <Text style={{ color: '#999', textAlign: 'right', fontSize: 12 }}>{item.hour}</Text>
                <Text style={{ color: '#000' }}>Cliente: {item.client}</Text>
                <Text style={{ color: '#000' }}>Dirección: {item.adress}</Text>
            </Card>
        );
    }

    return (
        <View>
            <CalendarList
                onDayPress={day => searchInfoForDate(day)}
                markingType={'multi-dot'}
                markedDates={dataServices}
            />
            <Modal isVisible={modal}>
                <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                    <Card containerStyle={{ height: '70%' }}>
                        <Card.Title style={{ fontSize: 18 }}>Servicios del día</Card.Title>
                        <Card.Divider />
                        <Text style={{ color: '#999', textAlign: 'right', fontSize: 15, marginBottom: 5 }}>{date && modal ? moment(date).locale('es-mx').format('dddd DD [de] MMMM [de] YYYY') : null}</Text>
                        {date && modal ? (
                            <FlatList
                                data={dataServices[date].dots}
                                renderItem={renderDate}
                                keyExtractor={(item) => item.key}
                                style={{ height: 350 }} />
                        ) : null}
                        <FormButton
                            buttonTitle="Aceptar"
                            stylesText={{ fontSize: 15 }}
                            stylesContainer={{ backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO }}
                            onPress={() => setModal(false)} />
                    </Card>
                </View>
            </Modal>
            <AwesomeAlert
                show={alert}
                title='Sin servicios'
                message={`El ${moment(date).locale('es-mx').format('dddd DD [de] MMMM')} no tiene servicios`}
                showConfirmButton={true}
                confirmText='Aceptar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onConfirmPressed={() => setAlert(false)}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO} />
        </View>
    );
}

export default CalendarComponent;