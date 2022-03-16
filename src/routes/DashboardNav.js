import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import { ServiceOrderFormScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator();

const DashboardNav = () => {
    return (
        <Navigator
            initialRouteName="BottomTab" >
            <Screen name="BottomTab" component={BottomTabNav} options={{ headerShown: false }} />
            <Screen name="ServiceOrderForm" component={ServiceOrderFormScreen} options={{ headerTitle: 'Orden de Servicio' }} />
        </Navigator>
    )

}

export default DashboardNav;