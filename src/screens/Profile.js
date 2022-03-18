import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import FormButton from '../components/FormButton';
import HeaderScreenComponent from '../components/HeaderScreen';
import Colors from '../utils/Colors';

const ProfileScreen = () => {
    return (
        <ScrollView>
            <View>
                <HeaderScreenComponent title="Perfil" />
                <View style={{
                    alignItems: 'center',
                    marginBottom: 30,
                    marginTop: 15,
                }}>
                    <Avatar
                        size={130}
                        rounded
                        title="MC"
                        containerStyle={{ backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO }}
                    />
                    <Text
                        style={{ fontSize: 18, marginTop: 10, color: "#000" }}>
                        Montse Contreras
                    </Text>
                </View>
                <View style={{ marginTop: -15 }}>
                    <Card>
                        <Card.Title>Datos personales</Card.Title>
                        <Card.Divider />
                        <Text>Montserrat Velazquez Contreras</Text>
                    </Card>
                    <Card>
                        <Card.Title>Datos de la cuenta</Card.Title>
                        <Card.Divider />
                        <Text>Correo: contrerasmonce7@gmail.com</Text>
                        <Text>Contraseña: ************</Text>
                    </Card>
                    <Card>
                        <Card.Title>Direcciones</Card.Title>
                        <Card.Divider />
                        <View style={styles.viewStyle}>
                            <Text>Av kabah</Text>
                            {/* <FormButton  icon="user" size={15} color="#000" /> */}
                        </View>
                    </Card>
                    <Card>
                        <FormButton buttonTitle="Cambiar contraseña" />
                        <FormButton buttonTitle="Cerrar sesión" />
                    </Card>
                </View>
            </View>
        </ScrollView>

    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
        viewStyle: {
            padding: 5,
            flexDirection: 'row',
            alignItems: 'center'
        },
        formB: {
            width: 100,
            height: 50,
        }
})