import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth, ConectionApi, UserModel } from "../../utils";
import { useForm, Controller } from 'react-hook-form';
import { Alert, FormButton, Forminput } from "../../components";



const LoginScreen = ({ navigation }) => {
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: UserModel.REGISTER_USER
    });
    const [alert, setAlert] = useState(false);
    const [alertTitle, setAlertTitle] = useState('');
    const [messageAlert, setMessageAlert] = useState('');

    const userType = async (user) => {
        try {
            await AsyncStorage.setItem('$data_user', JSON.stringify(user));
            if (user.is_technical) {
                navigation.navigate('Welcome');
            } else {
                navigation.navigate('Dashboard');
            }
        } catch (error) {
            console.log(error);
        }
    }

    const onSubmit = async data => {
        await Auth.login(data).then(
            response => {
                console.log(response);
            }
        )
        // ConectionApi.login(data).then(resp => {
        //     if (resp.status) {
        //         if (resp.data.is_technical) {
        //             userType(resp.data);
        //         } else {
        //             userType("cliente");
        //         }
        //     } else {
        //         if (resp.code == 401) {
        //             console.log(resp.code);
        //         } else {
        //             console.log(resp.code);
        //         }
        //     }
        // });
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}></Text>
            <Controller
                control={control}
                rules={{
                    required: true,
                    pattern: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/i
                }}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                    <Forminput
                        placeholderText="Correo electr??nico"
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
                    {errors.email.type == 'pattern' && <Text style={styles.text_error}>No es un correo electr??nico valido</Text>}
                    {errors.email.type == 'required' && <Text style={styles.text_error}>El campo correo electr??nico es requerido</Text>}
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
                        placeholderText="Contrase??a"
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
                    {errors.password.type == 'minLength' && <Text style={styles.text_error}>La contrase??a no puede tener menos de 8 caracteres</Text>}
                    {errors.password.type == 'required' && <Text style={styles.text_error}>El campo contrase??a es requerido</Text>}
                </View>
            }
            <FormButton
                buttonTitle="Entrar"
                onPress={handleSubmit(onSubmit)}
            />
            <TouchableOpacity
                style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>??Olvidaste tu contrase??a?</Text>
            </TouchableOpacity>
            <View>
                <FormButton
                    buttonTitle="Iniciar Sesi??n con Google"
                    icon="google"
                    size={22}
                    color="#fff"
                    stylesContainer={{ backgroundColor: "#de4d41" }}
                    stylesText={{ marginLeft: 20 }}
                />
            </View>
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.navButtonText}>
                    Crear cuenta
                </Text>
            </TouchableOpacity>
            <Alert alert={alert} message={messageAlert} title={alertTitle} onConfirmPressed={() => setAlert(false)} />
        </View>

    );

};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: 25
    },
    logo: {
        height: 90,
        width: 350,
        resizeMode: 'contain',
    },
    text: {
        fontFamily: 'Kufam-SemiboldItalic',
        fontSize: 15,
        marginBottom: 10,
        color: '#051d5f'
    },
    navButton: {
        marginTop: -10,

    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#1b1464',
        fontFamily: 'Lato-Regular'
    },
    text_error: {
        color: 'red',
        fontSize: 12,
        textAlign: 'left',
    },
});

