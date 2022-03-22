import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import HeaderScreenComponent from '../components/HeaderScreen';
import FormButton from '../components/FormButton';
import Colors from '../utils/Colors';


const ScheduledAppointmentsScreen = ({ navigation }) => {
    return (
        <View>
            <HeaderScreenComponent title='Citas programadas' />
            <Card>
                <Card.Title>CITA KABAH</Card.Title>
                <Card.Divider />
                <View style={styles.viewStyle}>
                    <Text>Cita programada a las 11:52</Text>
                    <FormButton
                        icon="edit"
                        size={15}
                        color="#fff"
                        stylesContainer={styles.button}
                        onPress={() => navigation.navigate('EditScheduledAppointments')}
                    />
                </View>
            </Card>
        </View>
    );
}

export default ScheduledAppointmentsScreen;
const styles = StyleSheet.create({
    viewStyle: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        width: '13%',
        margin: 0,
        height: 40,
        position: 'absolute',
        right: 0,
        borderRadius: 100
    }
})