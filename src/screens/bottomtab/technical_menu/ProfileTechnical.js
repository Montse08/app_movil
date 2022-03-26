import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import { Colors, UserCache } from '../../../utils';
import { HeaderScreen, FormButton } from '../../../components';

const ProfileTechnicalScreen = ({ navigation }) => {
    const [user, setUser] = useState([]);

    const getUser = async () => {
        try {
            let data = await UserCache.getUser();
            setUser(JSON.parse(data));
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#fff', height: '100%' }}>
            <View>
                <HeaderScreen title="Perfil" />
                <View style={{
                    alignItems: 'center',
                    marginBottom: 30,
                    marginTop: 15,
                }}>
                    <Avatar
                        size={130}
                        rounded
                        title={`${user.name.slice(0, 1)}${user.last_name.slice(0, 1)}`}
                        containerStyle={{ backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO }}
                    />
                    <Text
                        style={{ fontSize: 18, marginTop: 10, color: "#000" }}>
                        {user.username}
                    </Text>
                </View>
                <View style={{ marginTop: -15 }}>
                    <Card containerStyle={[styles.elevation, { borderRadius: 10 }]}>
                        <Card.Title>Datos personales</Card.Title>
                        <Card.Divider />
                        <Text style={{ color: '#000' }}>{user.name.slice(0, 1)} {user.last_name.slice(0, 1)}</Text>
                    </Card>
                    <Card containerStyle={[styles.elevation, { borderRadius: 10 }]}>
                        <Card.Title>Datos de la cuenta</Card.Title>
                        <Card.Divider />
                        <Text style={{ color: '#000' }}>Nombre de usuario: {user.username}</Text>
                        <Text style={{ color: '#000' }}>Correo: {user.email}</Text>
                        <Text style={{ color: '#000' }}>Contraseña: ************</Text>
                    </Card>
                    <Card containerStyle={[styles.elevation, { borderRadius: 10 }]}>
                        <FormButton buttonTitle="Cerrar sesión" onPress={() => {
                            navigation.navigate('Login');
                            UserCache.removeAll();
                        }} />
                    </Card>
                </View>
            </View>
        </ScrollView>
    );
}

export default ProfileTechnicalScreen;

const styles = StyleSheet.create({
    elevation: {
        shadowColor: '#470000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5
    }
});