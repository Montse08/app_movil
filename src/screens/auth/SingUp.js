import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Auth, Colors, UserModel } from '../../utils';
import { FormButton, Forminput, Alert } from '../../components';

const SingUpScreen = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: UserModel.REGISTER_USER
    });
    const [noConfirm, setNoConfirm] = useState(false);
    const shared_rules = { required: true, pattern: /^[A-Za-z ÁÉÍÓÚáéíóúü]+$/i }
    const [alert, setAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [messageAlert, setMessageAlert] = useState('');

    const registerUser = async data => {
        await Auth.register(data).then(
            response => {
                setAlert(true);
                if (response.status) {
                    setAlertTitle('Registrado');
                    setMessageAlert(response.message);
                    setTimeout(() => {
                        setAlert(false);
                        navigation.goBack();
                    }, 3000);
                } else {
                    if (response.code == 400) {
                        setAlertTitle('Datos incorrectos');
                        setMessageAlert(response.message);
                    } else {
                        setAlertTitle('Ups!');
                        setMessageAlert(response.message);
                    }
                }
                setTimeout(() => {
                    setAlert(false);
                }, 3000);
            }
        )
    }

    const onSubmit = data => {
        if (data.password != data.password_confirm) {
            setNoConfirm(true);
        } else {
            setNoConfirm(false);
            registerUser(data);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Controller
                control={control}
                rules={shared_rules}
                name="name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Forminput
                        placeholderText="Nombre"
                        iconType="id-card"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.name &&
                <View style={{ width: '100%', alignContent: 'flex-start' }}>
                    {errors.name.type == 'pattern' && <Text style={styles.text_error}>No se aceptan caracteres especiales</Text>}
                    {errors.name.type == 'required' && <Text style={styles.text_error}>El campo nombre es requerido</Text>}
                </View>
            }
            <Controller
                control={control}
                rules={shared_rules}
                name="last_name"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Forminput
                        placeholderText="Apellidos"
                        iconType="id-card"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.last_name &&
                <View style={{ width: '100%', alignContent: 'flex-start' }}>
                    {errors.last_name.type == 'pattern' && <Text style={styles.text_error}>No se aceptan caracteres especiales</Text>}
                    {errors.last_name.type == 'required' && <Text style={styles.text_error}>El campo apellidos es requerido</Text>}
                </View>
            }
            <Controller
                control={control}
                rules={{
                    required: true,
                    maxLength: 15,
                    minLength: 5
                }}
                name="username"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Forminput
                        placeholderText="Nombre de usuario"
                        iconType="user"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.username &&
                <View style={{ width: '100%', alignContent: 'flex-start' }}>
                    {errors.username.type == 'maxLength' && <Text style={styles.text_error}>El nombre de usuario no puede tener más de 15 catacteres</Text>}
                    {errors.username.type == 'minLength' && <Text style={styles.text_error}>El nombre de usuario no puede tener menos de 5 catacteres</Text>}
                    {errors.username.type == 'required' && <Text style={styles.text_error}>El campo nombre de usuario es requerido</Text>}
                </View>
            }
            <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i
                }}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Forminput
                        placeholderText="Correo electrónico"
                        iconType="envelope"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.email &&
                <View style={{ width: '100%', alignContent: 'flex-start' }}>
                    {errors.email.type == 'pattern' && <Text style={styles.text_error}>No es un correo electrónico valido</Text>}
                    {errors.email.type == 'required' && <Text style={styles.text_error}>El campo correo electrónico es requerido</Text>}
                </View>
            }
            <Controller
                control={control}
                rules={{
                    required: true,
                    minLength: 8
                }}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Forminput
                        placeholderText="Contraseña"
                        iconType="lock"
                        secureTextEntry={true}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.password &&
                <View style={{ width: '100%', alignContent: 'flex-start' }}>
                    {errors.password.type == 'minLength' && <Text style={styles.text_error}>La contraseña no puede tener menos de 8 caracteres</Text>}
                    {errors.password.type == 'required' && <Text style={styles.text_error}>El campo contraseña es requerido</Text>}
                </View>
            }
            <Controller
                control={control}
                rules={{
                    required: true
                }}
                name="password_confirm"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Forminput
                        placeholderText="Confirmar contraseña"
                        iconType="lock"
                        secureTextEntry={true}
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                    />
                )}
            />
            {errors.password_confirm &&
                <View style={{ width: '100%', alignContent: 'flex-start' }}>
                    {errors.password_confirm.type == 'required' && <Text style={styles.text_error}>El campo confirmar contraseña es requerido</Text>}
                </View>
            }
            {noConfirm &&
                <View style={{ width: '100%', alignContent: 'flex-start' }}>
                    <Text style={styles.text_error}>Las contraseñas no coinciden</Text>
                </View>
            }
            <FormButton
                buttonTitle="Crear cuenta"
                onPress={handleSubmit(onSubmit)}
            />
            <View style={styles.textPrivate}>
                <Text style={styles.color_textPrivate}>
                    Al registrarse, confirma que acepta nuestras{' '}
                </Text>
                <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
                    <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                        Condiciones de servicio
                    </Text>
                </TouchableOpacity>
                <Text style={styles.color_textPrivate}> y </Text>
                <Text style={[styles.color_textPrivate, { color: '#e88832' }]}>
                    Política de privacidad
                </Text>
            </View>
            <Alert alert={alert} message={messageAlert} title={alertTitle} onConfirmPressed={() => setAlert(false)} />
        </ScrollView>
    )
}

export default SingUpScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        zIndex: 0
    },
    logo: {
        height: 90,
        width: 330,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: Colors.PRIMARY_COLOR,
    },
    navButton: {
        marginTop: 15,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: Colors.PRIMARY_COLOR,
        fontFamily: 'Lato-Regular',
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    text_error: {
        color: 'red',
        fontSize: 12,
        textAlign: 'left',
    },
    alert: {
        backgroundColor: '#fff'
    }
});