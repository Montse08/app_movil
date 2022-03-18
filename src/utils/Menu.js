import * as Screens from "../screens"

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
]

export const MenuTecnico = [
    {
        'name': 'Services',
        'component': Screens.ServicesScreen,
        'icon': 'calendar-check-o'
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
        'name': 'Gasoline',
        'component': Screens.GasolineScreen,
        'icon': 'tint'
    },
    {
        'name': 'ProfileTechnical',
        'component': Screens.ProfileTechnicalScreen,
        'icon': 'user-circle-o'
    }
];