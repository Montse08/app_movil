import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';
import * as Screens from '../screens';

const { Navigator, Screen } = createStackNavigator();

const DashboardNav = () => {
    return (
        <Navigator
            initialRouteName="BottomTab" >
            <Screen
                name="BottomTab"
                component={BottomTabNav}
                options={{
                    headerShown: false
                }} />
            <Screen
                name="Domicile"
                component={Screens.DomicileScreen}
                options={{
                    headerTitle: 'Domicilio',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name="Pets"
                component={Screens.PetsScreen}
                options={{
                    headerTitle: 'Mascotas',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name="TypeOfService"
                component={Screens.TypeOfServiceScreen}
                options={{
                    headerTitle: 'Tipo de servicio',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name="Problem"
                component={Screens.ProblemScreen}
                options={{
                    headerTitle: 'Problema',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name="DateAndTime"
                component={Screens.DateAndTimeScreen}
                options={{
                    headerTitle: 'FECHA Y HORA',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name="ServiceOrderForm"
                component={Screens.ServiceOrderFormScreen}
                options={{
                    headerTitle: 'Orden de Servicio'
                }}
            />
            <Screen
                name='ChangePassword'
                component={Screens.ChangePasswordScreen}
                options={{
                    headerTitle: 'CAMBIAR CONTRASEÑA',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='Addresses'
                component={Screens.AddressesScreen}
                options={{
                    headerTitle: 'DIRECCIONES',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='ChatBot'
                component={Screens.ChatBotScreen}
                options={{
                    headerTitle: 'CHATBOT',
                    headerTitleAlign: 'center',
                }}
            />
            <Screen
                name='EditScheduledAppointments'
                component={Screens.EditScheduledAppointmentsScreen}
                options={{
                    headerTitle: 'EDITAR CITAS PROGRAMADA',
                    headerTitleAlign: 'center',
                }}
            />

        </Navigator>
    )

}

export default DashboardNav;