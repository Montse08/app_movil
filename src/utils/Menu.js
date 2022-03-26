import * as Screens from "../screens";

export const MenuClient = [
    {
        'name': 'Home',
        'component': Screens.HomeScreen,
        'icon': 'home'
    },
    {
        'name': 'Appointments',
        'component': Screens.AppointmentsScreen,
        'icon': 'calendar-o'
    },
    {
        'name': 'ScheduledAppointments',
        'component': Screens.ScheduledAppointmentsScreen,
        'icon': 'calendar-check-o'
    },
    {
        'name': 'Contact',
        'component': Screens.ContactScreen,
        'icon': 'phone'
    },
    {
        'name': 'Prophile',
        'component': Screens.ProfileScreen,
        'icon': 'user-circle-o'
    }
];

export const MenuTecnico = [
    {
        'name': 'Services',
        'component': Screens.ServicesScreen,
        'icon': 'pencil-square-o'
    },
    {
        'name': 'ServiceOrden',
        'component': Screens.ServiceOrdenScreen,
        'icon': 'clipboard'
    },
    {
        'name': 'Mileage',
        'component': Screens.MileageScreen,
        'icon': 'tachometer'
    },
    {
        'name': 'Calendar',
        'component': Screens.CalendarScreen,
        'icon': 'calendar'
    },
    {
        'name': 'ProfileTechnical',
        'component': Screens.ProfileTechnicalScreen,
        'icon': 'user-circle-o'
    }
];

export const MenuDashboard = [
    {
        'name': 'Domicile',
        'component': Screens.DomicileScreen,
        'headerTitle': 'Cliente y dirección'
    },
    {
        'name': 'Pets',
        'component': Screens.PetsScreen,
        'headerTitle': 'Mascotas'
    },
    {
        'name': 'TypeOfService',
        'component': Screens.TypeOfServiceScreen,
        'headerTitle': 'Tipo de Servicio'
    },
    {
        'name': 'Problem',
        'component': Screens.ProblemScreen,
        'headerTitle': 'Problema'
    },
    {
        'name': 'DateAndTime',
        'component': Screens.DateAndTimeScreen,
        'headerTitle': 'Fecha y Hora'
    },
    {
        'name': 'ServiceOrderForm',
        'component': Screens.ServiceOrderFormScreen,
        'headerTitle': 'Orden de Servicio'
    },
    {
        'name': 'ChangePassword',
        'component': Screens.ChangePasswordScreen,
        'headerTitle': 'Cambiar Contraseña'
    },
    {
        'name': 'Addresses',
        'component': Screens.AddressesScreen,
        'headerTitle': 'Direcciones'
    },
    {
        'name': 'ChatBot',
        'component': Screens.ChatBotScreen,
        'headerTitle': 'ChatBot'
    },
    {
        'name': 'EditScheduledAppointments',
        'component': Screens.EditScheduledAppointmentsScreen,
        'headerTitle': 'Editar Citas Programadas'
    },
    {
        'name': 'Signature',
        'component': Screens.SignatureScreen,
        'headerTitle': 'Firmas'
    },
    {
        'name': 'OrderDetail',
        'component': Screens.OrderDetailScreen,
        'headerTitle': 'Detalle de la orden'
    },
    {
        'name': 'Client',
        'component': Screens.ClientScreen,
        'headerTitle': 'Cliente'
    },
    {
        'name': 'AddClient',
        'component': Screens.AddClientScreen,
        'headerTitle': 'Agregar cliente'
    }
];