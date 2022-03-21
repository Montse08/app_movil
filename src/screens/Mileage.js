import React from 'react';
import { Text, View } from 'react-native';
import { HeaderScreen } from '../components';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import FormButton from '../components/FormButton';
import moment from 'moment';

const MileageScreen = () => {

    const calendarEvent = () => {
        const eventConfig = {
            title: 'Jiovany',
            startDate: moment(new Date()).format(
                'YYYY-MM-DDTHH:mm:ss.SSS[Z]',
            ),
            endDate: moment(new Date()).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]'),
            location: 'Las millas de brasil',
            notes: `Jiovany\nLas millas de brasil\nCancun Quintana Rooo\n${moment(new Date()).format('LLL')}\n\nComprar boletos: www.facebook.com`,
        };

        AddCalendarEvent.presentEventCreatingDialog(eventConfig)
            .then(eventInfo => { })
            .catch(error => { });
    };

    return (
        <View>
            <HeaderScreen title="Kilometraje"></HeaderScreen>
            <FormButton buttonTitle="Calendario" onPress={() => calendarEvent()} />
        </View>
    );
}

export default MileageScreen;