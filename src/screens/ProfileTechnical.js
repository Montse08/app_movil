import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Avatar, Card } from 'react-native-elements';
import { HeaderScreen } from '../components';
import FormButton from '../components/FormButton';
import Colors from '../utils/Colors';

const ProfileTechnicalScreen = ({ navigation }) => {
    return (
        <ScrollView>
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
                        title="AH"
                        containerStyle={{ backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO }}
                    />
                    <Text
                        style={{ fontSize: 18, marginTop: 10, color: "#000" }}>
                        Ángel Hernandez Cortes
                    </Text>
                </View>
                <View style={{ marginTop: -15 }}>
                    <Card>
                        <Card.Title>Datos personales</Card.Title>
                        <Card.Divider />
                        <Text style={{ color: '#000' }}>Ángel Hernandez Cortes</Text>
                    </Card>
                    <Card>
                        <Card.Title>Datos de la cuenta</Card.Title>
                        <Card.Divider />
                        <Text style={{ color: '#000' }}>Nombre de usuario: Ángel</Text>
                        <Text style={{ color: '#000' }}>Correo: angel@gmail.com</Text>
                        <Text style={{ color: '#000' }}>Contraseña: ************</Text>
                    </Card>
                    <Card>
                        <FormButton buttonTitle="Cerrar sesión" onPress={() => navigation.navigate('Login')} />
                    </Card>
                </View>
            </View>
        </ScrollView>
    );
}

export default ProfileTechnicalScreen;