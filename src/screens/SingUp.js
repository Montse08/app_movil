import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import FormButton from '../components/FormButton';
import Forminput from '../components/Forminput';
import Colors from '../utils/Colors';


const SignUp = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />

            <Forminput
                placeholderText="Nombre"
                iconType="id-card"
            />
            <Forminput
                placeholderText="Apellidos"
                iconType="id-card"
            />
            <Forminput
                placeholderText="Nombre de usuario"
                iconType="user"
            />
            <Forminput
                placeholderText="Teléfono"
                iconType="phone"
            />
            <Forminput
                placeholderText="Correo electrónico"
                iconType="envelope"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <Forminput
                placeholderText="Contraseña"
                iconType="lock"
                secureTextEntry={true}
            />
            <Forminput
                placeholderText="Confirmar contraseña"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Crear cuenta"
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
                {/* <TouchableOpacity
                    style={styles.navButton}>
                    <Text style={styles.navButtonText}>Have an account? Sign In</Text>
                </TouchableOpacity> */}
            </View>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f9fafd',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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
});