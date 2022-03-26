import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import { Colors, Menu } from '../utils';

const { Navigator, Screen } = createStackNavigator();

const DashboardNav = () => {
    const renderScreens = (item, index) => {
        return (
            <Screen
                key={index}
                name={item.name}
                component={item.component}
                options={{
                    headerTitle: item.headerTitle,
                    cardStyle: { backgroundColor: '#fff' },
                    headerStyle: { backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO },
                    headerTitleStyle: { color: '#fff' },
                    headerTintColor: '#fff'
                }}
            />
        );
    }

    return (
        <Navigator
            initialRouteName="BottomTab" >
            <Screen
                name="BottomTab"
                component={BottomTabNav}
                options={{
                    headerShown: false
                }} />
            {Menu.MenuDashboard.map((item, index) => renderScreens(item, index))}
        </Navigator>
    )

}

export default DashboardNav;