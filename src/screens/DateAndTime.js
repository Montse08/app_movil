import React, { useState } from 'react';
import { View, StyleSheet, Button, Text, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import FormButton from '../components/FormButton';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DateAndTimeScreen = ({ navigation, iconType }) => {
    const [datePicker, setDatePicker] = useState(false);
    const [initialDate, setInitialDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [dateText, setDateText] = useState('');
    const [timeText, setTimeText] = useState('');

    const confirmDateTime = (date) => {
        let currentDateTime = new Date(date);
        if (mode == 'date') {
            setInitialDate(currentDateTime);
            let templateDate = moment(currentDateTime).format('yyyy-MM-DD');
            setDateText(templateDate);
        } else {
            let templateTime = moment(currentDateTime).format('hh:mm');
            setTimeText(templateTime);
        }
        setDatePicker(false);
    }

    return (
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
            <Text style={styles.textTitle}>Seleccionar fecha </Text>
            <View style={styles.viewCalendar}>
                <Card>
                    <Text
                        style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>
                        {dateText}
                    </Text>
                </Card>
                <Card>
                    <Button
                        title='DatePicker'
                        onPress={() => {
                            setMode('date');
                            setDatePicker(true);
                        }}>
                    </Button>
                </Card>
            </View>
            <Text style={styles.textTitle}>Seleccionar hora </Text>
            <View
                style={styles.viewCalendar}>
                <Card>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, color: '#000' }}>{timeText}</Text>
                </Card>
                <Card>
                    <Button
                        title='TimePicker'
                        onPress={() => {
                            setMode('time');
                            setDatePicker(true);
                        }}>
                    </Button>
                </Card>
            </View>
            <View style={{ margin: 20 }}>

            </View>
            <DateTimePickerModal
                isVisible={datePicker}
                value={initialDate}
                mode={mode}
                is24hours={true}
                display='default'
                onConfirm={confirmDateTime}
                onCancel={() => setDatePicker(false)}
                minimumDate={new Date()}
            />
        </View>




    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 13,
        width: -5,
        padding: 8,
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
    }
});

export default DateAndTimeScreen;
