import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SingUpScreen, HomeScreen } from "../screens";
import { Text } from 'react-native';

const { Navigator, Screen } = createStackNavigator();

const AuthNav = () => {
    return (
        <Navigator initialRouteName="Login">
            <Screen
                name="Login"
                component={LoginScreen}
                options={{
                    headerShown: false
                }} />
            <Screen
                name="SignUp"
                component={SingUpScreen}
                options={{
                    headerTitle: 'Crear cuenta',
                    headerTitleAlign: 'center',
                }} />
            <Screen 
                name="Home"
                component={HomeScreen}
                options={{
                    headerTitle: 'ESTAMOS EN HOME LPTM',
                }}
            />
        </Navigator>
    )
}

export default AuthNav;