import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import Forminput from "../components/Forminput";
import FormButton from "../components/FormButton";
import SocialButton from "../components/SocialButton";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthContext } from "../navigation/AuthProvider.android";
import Footer from "../components/Footer";
import Colors from "../utils/Colors";


const Login = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const userType = async () => {
        try {
            await AsyncStorage.setItem('user_type', 'tecnico');
            navigation.navigate('Dashboard');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.text}></Text>
            <Forminput
                labelValue={email}
                onChangeText={(userEmail) => setEmail(userEmail)}
                placeholderText="Email"
                iconType="envelope"
                keyboardType="email-address"
                autocapitalize="none"
                autoCorrect={false}
            />
            <Forminput
                labelValue={password}
                onChangeText={(userPassword) => setPassword(userPassword)}
                placeholderText="Password"
                iconType="lock"
                secureTextEntry={true}
            />
            <FormButton
                buttonTitle="Entrar"
                onPress={async () => userType()}
            />
            <TouchableOpacity
                style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            <View>
                <SocialButton
                    buttonTitle="Sign In with Google"
                    btnType="google"
                    color="#de4d41"
                    backgroundColor="#f5e7ea"
                />
            </View>
            <TouchableOpacity
                style={styles.forgotButton}
                onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.navButtonText}>
                    Crear cuenta
                </Text>
            </TouchableOpacity>
            {/* <Footer /> */}
        </View>
        
    );

};

export default Login;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25,
        paddingTop: 230,
    },
    logo: {
        height: 90,
        width: 350,
        marginTop: -150,
        resizeMode: 'contain',
        // backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO
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
    }

});

