import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, SingUpScreen } from "../screens";
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
        </Navigator>
    );
}

export default AuthNav;