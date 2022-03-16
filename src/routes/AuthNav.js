import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SingUpScreen, WelcomeTechnicalScreen } from "../screens";
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
                name="Welcome"
                component={WelcomeTechnicalScreen}
                options={{
                    headerShown: false
                }} />
        </Navigator>
    );
}

export default AuthNav;