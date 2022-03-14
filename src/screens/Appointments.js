import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import HeaderScreenComponent from '../components/HeaderScreen';
import { Card, Button } from 'react-native-elements';
import Colors from '../utils/Colors';

const AppointmentsScreen = () => {
    return (
        <View>
            <HeaderScreenComponent title="Citas" />
            <View style={styles.viewStyle}>
                <Card>
                    <Card.Title>AGENDE UNA CITA</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={require('../assets/FUMIGACIONESjpg.jpg')}
                    />
                    <Text>
                        Los isópteros son un infraorden de insectos
                        neópteros, conocidos vulgarmente como termitas,
                        termes, turiros o comejenes y también como hormigas
                        blancas por su semejanza superficial con las hormigas.
                    </Text>
                    <Button
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO,
                        }}
                        title="VIEW NOW"
                    />
                </Card>
            </View>
        </View>
    );
}

export default AppointmentsScreen;

const styles = StyleSheet.create({
    viewStyle: {
        padding: 50,
        flexDirection: 'row',
        alignItems: 'center'
    }
})