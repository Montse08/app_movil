import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, PermissionsAndroid } from 'react-native';
import { Card } from 'react-native-elements';
import FormButton from '../components/FormButton';
import Geolocation from 'react-native-geolocation-service'
import MapView, { Circle, Marker } from 'react-native-maps';
import AwesomeAlert from 'react-native-awesome-alerts';
import Colors from '../utils/Colors';
import { ActivityIndicator } from 'react-native-paper';

const AddressesScreen = ({ route, navigation }) => {
    const { screen } = route.params;
    const [position, setPosition] = useState('');
    const [alertError, setAlertError] = useState(false);
    const [alertPermissionDenegate, setAlertPermissionDenegate] = useState(false);

    useEffect(() => {
        requestPermissionAndroid();
    }, []);

    const getMyLocation = () => {
        Geolocation.getCurrentPosition(
            async positionCoords => {
                setPosition({
                    latitude: positionCoords.coords.latitude,
                    longitude: positionCoords.coords.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005
                });
            },
            error => {
                console.info('error getCurrentPosition', error);
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
        );
    }

    const requestPermissionAndroid = async () => {
        PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        ).then(async checkLocation => {
            if (checkLocation) {
                getMyLocation();
            } else {
                try {
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,);
                    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                        getMyLocation();
                    } else {
                        setAlertPermissionDenegate(true);
                    }
                } catch (err) {
                    console.warn('error permissions android', err);
                    setAlertError(true);
                }
            }
        })
    }

    changePosition = (region) => {
        setTimeout(() => {
            setPosition(region);
        }, 1000);
    }

    return (
        <ScrollView>
            <View>
                <Card>
                    <Card.Title>Ubicación</Card.Title>
                    <Card.Divider />
                    {position != '' ? (
                        <MapView
                            initialRegion={position}
                            onRegionChange={changePosition}
                            loadingEnabled
                            style={{ width: '100%', height: 300 }}>
                            <Marker
                                coordinate={position}
                                title='Mi ubicación'
                            />
                        </MapView>
                    ) :
                        <View style={{ width: '100%', height: 300, justifyContent: 'center', alignItems: 'center' }}>
                            <ActivityIndicator size={30} color={Colors.PRIMARY_COLOR_AZULDELLOGO} />
                            <Text style={{ color: '#000' }}>Cargando</Text>
                        </View>
                    }
                </Card>
                <Card>
                    <Text style={styles.textJ}>Codigo postal</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '30%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        keyboardType="numeric"
                        maxLength={5} />

                    <Text style={styles.textJ}>Cuidad</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />

                    <Text style={styles.textJ}>Calle</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />
                    <Text style={styles.textJ}>Avenida</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />
                    <Text style={styles.textJ}>Referencia</Text>
                    <TextInput
                        style={styles.inputMultiline}
                        underlineColorAndroid="transparent"
                        textAlignVertical="top"
                        // value={despues}
                        // onChangeText={text => setDespues(text)}
                        multiline
                        numberOfLines={4}
                        selectionColor="#999" />
                    <View style={styles.view2}>
                        <Text style={[styles.textN, { width: '40%', marginRight: '20%' }]}>Número exterior</Text>
                        <Text style={styles.textN}>Número interior</Text>
                    </View>
                    <View style={styles.view2}>
                        <TextInput
                            style={[styles.inputDisabled, { width: '40%', marginRight: '20%' }]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            maxLength={5}
                            keyboardType="numeric" />
                        <TextInput
                            style={[styles.inputDisabled, { width: '40%' }]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            maxLength={5}
                            placeholder="Opcional"
                            keyboardType="numeric" />
                    </View>
                    <Text style={styles.textJ}>Colonia</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />
                </Card>
                <Card style={{ marginBottom: 20 }}>
                    <FormButton
                        buttonTitle="GUARDAR DIRECCIÓN"
                        onPress={() => navigation.navigate(screen)} />
                </Card>
            </View>
            <AwesomeAlert
                show={alertError}
                title="Algo salio mal"
                message="Algo salio mal, por favor intentalo de nuevo más tarde"
                showConfirmButton={true}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                confirmText="Aceptar"
                onConfirmPressed={() => {
                    setAlertError(false);
                    navigation.navigate(screen == 'Domicile' ? 'Appointments' : screen);
                }}
                closeOnHardwareBackPress={false}
                closeOnTouchOutside={false} />
            <AwesomeAlert
                show={alertPermissionDenegate}
                title="Permiso requerido"
                message="Para poder brindarle la mejor experiencia es necesario que permita la ubicación. ¿Qué desea hacer?"
                showConfirmButton={true}
                showCancelButton={true}
                confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                cancelButtonColor={Colors.PRIMARY_COLOR_NARANJALOGO}
                confirmText="Permitir"
                cancelText="Denegar"
                onConfirmPressed={() => {
                    setAlertPermissionDenegate(false);
                    requestPermissionAndroid();
                }}
                onCancelPressed={() => {
                    setAlertPermissionDenegate(false);
                    navigation.navigate(screen == 'Domicile' ? 'Appointments' : screen);
                }}
                closeOnHardwareBackPress={false}
                closeOnTouchOutside={false} />
        </ScrollView>
    )
};

export default AddressesScreen;

const styles = StyleSheet.create({
    inputDisabled: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    },
    textJ: {
        color: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    textN: {
        color: '#000',
        marginBottom: 8,
        fontSize: 15
    },
    inputMultiline: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    view2: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 1
    },
})
