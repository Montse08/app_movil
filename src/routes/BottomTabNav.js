import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppointmentsScreen, ContactScreen, HomeScreen, ProphileScreen, ScheduledAppointmentsScreen } from '../screens';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../utils/Colors';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNav = () => {

    const RenderIcon = ({ name, focus }) => {
        return (
            <FontAwesome name={name} size={25} color={focus ? Colors.PRIMARY_COLOR_NARANJALOGO : '#fff'} />
        );
    }

    return (
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
                    height: 70
                }
            }} >
            <Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => <RenderIcon name="home" focus={focused} />
                }} />
            <Screen
                name="Appointments"
                component={AppointmentsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => <RenderIcon name="calendar-o" focus={focused} />
                }} />
            <Screen
                name="ScheduledAppointments"
                component={ScheduledAppointmentsScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => <RenderIcon name="calendar-check-o" focus={focused} />
                }} />
            <Screen
                name="Contact"
                component={ContactScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => <RenderIcon name="phone" focus={focused} />
                }} />
            <Screen
                name="Prophile"
                component={ProphileScreen}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => <RenderIcon name="user-circle-o" focus={focused} />
                }} />
        </Navigator>
    );
}

export default BottomTabNav;