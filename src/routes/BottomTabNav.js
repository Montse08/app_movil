import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors, Menu } from '../utils';
import { ActivityIndicator, Text, View } from 'react-native';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabNav = () => {
    const menu = Menu;
    const [typeUser, setTypeUser] = useState('')

    const getUserType = async () => {
        try {
            const data = await AsyncStorage.getItem('user_type');
            setTypeUser(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getUserType()
    })

    const RenderIcon = ({ name, focus }) => {
        return (
            <FontAwesome name={name} size={22} color={focus ? Colors.PRIMARY_COLOR_NARANJALOGO : '#fff'} />
        );
    }

    const renderScreen = (item, index) => {
        return (
            <Screen
                key={index}
                name={item.name}
                component={item.component}
                options={{
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused }) => <RenderIcon name={item.icon} focus={focused} />
                }} />
        )
    }

    const renderNavigation = () => {
        if (typeUser == '') {
            return (
                <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <ActivityIndicator size={40} color={Colors.PRIMARY_COLOR_AZULDELLOGO} />
                    <Text style={{ color: '#000', fontSize: 18 }}>Cargando</Text>
                </View>
            )
        } else {
            return (
                <Navigator
                    initialRouteName={typeUser == 'cliente' ? "Home" : "Services"}
                    screenOptions={{
                        headerShown: false,
                        tabBarStyle: {
                            backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO
                        }
                    }} >
                    {typeUser == 'cliente' ? (
                        menu.MenuClient.map((item, index) => renderScreen(item, index))
                    ) : (
                        menu.MenuTecnico.map((item, index) => renderScreen(item, index))
                    )}
                </Navigator>
            );
        }
    }

    return renderNavigation();
}

export default BottomTabNav;