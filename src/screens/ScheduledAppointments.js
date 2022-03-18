import React from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import HeaderScreenComponent from '../components/HeaderScreen';


const ScheduledAppointmentsScreen = () => {
    return (
        <View> 
            <HeaderScreenComponent title='Citas programadas' />
            <Card>
                <Card.Title>CITA KABAH</Card.Title>
                <Card.Divider />
                <Text>Cita programada a las 11:52</Text>
            </Card>
        </View>
    );
}

export default ScheduledAppointmentsScreen;