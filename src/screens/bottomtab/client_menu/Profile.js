import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { Text, View, StyleSheet, ScrollView, TextInput } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Avatar, Card } from 'react-native-elements';
import { Colors } from '../../../utils';
import { FormButton, Forminput, HeaderScreen } from '../../../components';

const ProfileScreen = ({ navigation }) => {
    const [alertCancelar, setAlertCancelar] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
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
                        <Card.Title>Clientes</Card.Title>
                        <Card.Divider />
                        <View style={styles.viewStyle}>
                            <Text>Sheila operadora y procesadora</Text>
                            <FormButton
                                icon="edit"
                                size={15}
                                color="#fff"
                                stylesContainer={styles.button}
                                onPress={() => navigation.navigate('Client')}
                            />
                        </View>
                        <View style={styles.viewStyle}>
                            <Text>Sheila Cafe sirena</Text>
                            <FormButton
                                icon="edit"
                                size={15}
                                color="#fff"
                                stylesContainer={styles.button}
                                onPress={() => navigation.navigate('Addresses', {
                                    screen: 'Prophile'
                                })}
                            />
                        </View>
                        <View style={styles.viewStyle}>
                            <FormButton buttonTitle="Agregar cliente"
                                onPress={() => navigation.navigate('AddClient')} />
                        </View>
                    </Card>

                    <Card style={{}}>
                        <FormButton
                            buttonTitle="Cambiar contraseña"
                            size={22}
                            color="#fff"
                            onPress={() => navigation.navigate('ChangePassword')} />
                        <FormButton
                            buttonTitle="Eliminar cuenta"
                            onPress={() => setAlertCancelar(true)} />
                        <FormButton buttonTitle="Cerrar sesión" />
                    </Card>

                </View>
                <AwesomeAlert
                    show={alertCancelar}
                    title='Eliminar cuenta'
                    message='¿Estás seguro de que quieres eliminar tu cuenta?'
                    showCancelButton={true}
                    showConfirmButton={true}
                    confirmText='Aceptar'
                    cancelText='Cancelar'
                    closeOnTouchOutside={false}
                    closeOnHardwareBackPress={false}
                    onCancelPressed={() => setAlertCancelar(false)}
                    onConfirmPressed={() => {
                        setAlertCancelar(false);
                        setModalVisible(true);
                    }}
                    messageStyle={{ textAlign: 'center' }}
                    confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    cancelButtonColor='#ff0000' />
                <Modal isVisible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Card>
                                <Card.Title style={{ fontSize: 25, color: Colors.PRIMARY_COLOR_AZULDELLOGO }}>Eliminar Cuenta</Card.Title>
                                <Card.Divider />
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10 }}>
                                    <Forminput
                                        placeholderText="Ingresa tu contraseña"
                                        iconType="lock"
                                        keyboardType="email-address"
                                        autocapitalize="none"
                                        autoCorrect={false}
                                    />
                                </View>
                                <View>
                                    <FormButton buttonTitle="Aceptar" />
                                    <FormButton
                                        buttonTitle="Cancelar"
                                        onPress={() => navigation.navigate('Home')}
                                    />
                                </View>
                            </Card>
                        </View>
                    </View>
                </Modal>
            </View>
        </ScrollView>

    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    viewStyle: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    formB: {
        width: 100,
        height: 50,
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        width: '13%',
        margin: 0,
        height: 40,
        position: 'absolute',
        right: 0,
        borderRadius: 100
    },
    inputDisabled: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    }
})
