import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';

const { Navigator, Screen } = createStackNavigator();

const DashboardNav = () => {
    return (
        <Navigator
            initialRouteName="BottomTab"
            screenOptions={{ headerShown: false }} >
            <Screen name="BottomTab" component={BottomTabNav} />
        </Navigator>
    )

}

export default DashboardNav;