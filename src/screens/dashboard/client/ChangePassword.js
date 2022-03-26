import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import AwesomeAlert from 'react-native-awesome-alerts';
import { Colors } from '../../../utils';
import { FormButton, Forminput } from '../../../components';

const ChangePasswordScreen = ({ navigation }) => {
    const [alertCancelar, setAlertCancelar] = useState(false);
    return (
        <View>
            <Card>
                <Forminput
                    placeholderText="Contraseña actual"
                    iconType="cog"
                    keyboardType="email-address"
                    autocapitalize="none"
                    autoCorrect={false}
                />
                <Forminput
                    placeholderText="Contraseña nueva"
                    iconType="lock"
                    keyboardType="email-address"
                    autocapitalize="none"
                    autoCorrect={false}
                />
                <Forminput
                    placeholderText="Confirmar contraseña"
                    iconType="lock"
                    keyboardType="email-address"
                    autocapitalize="none"
                    autoCorrect={false}
                />
            </Card>
            <Card>
                <FormButton
                    buttonTitle="Actualizar contraseña"
                    onPress={() => setAlertCancelar(true)}
                    />
            </Card>
            <AwesomeAlert
                show={alertCancelar}
                title='Contraseña'
                message='¿Estás seguro de actulizar la contraseña?'
                showCancelButton={true}
                showConfirmButton={true}
                confirmText='Aceptar'
                cancelText='Cancelar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onCancelPressed={() => setAlertCancelar(false)}
                onConfirmPressed={() => {
                    setAlertCancelar(false);
                    navigation.navigate('Prophile');
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor='#ff0000' />
        </View>
    )
}

export default ChangePasswordScreen;
