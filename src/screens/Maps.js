import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import Geolocation from 'react-native-geolocation-service';
import MapViewDirections from "react-native-maps-directions";
import { API_GOOGLE } from "../utils";
import Colors from "../utils/Colors";

const MapsScreen = () => {
    const [position, setPosition] = useState();

    useEffect(() => {
        getMyLocation();
    }, []);

    const getMyLocation = () => {
        Geolocation.getCurrentPosition(
            async position => {
                let formatPosition = {
                    'latitude': position.coords.latitude,
                    'longitude': position.coords.longitude
                }
                setPosition(formatPosition);
            },
            error => {
                console.info('error getCurrentPosition', error);
            },
            { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 },
        );
    };

    return (
        <MapView
            initialRegion={{
                latitude: 21.1557399,
                longitude: -86.8200826,
                latitudeDelta: 0.0140,
                longitudeDelta: 0.0131,
            }}
            showsUserLocation
            loadingEnabled
            style={{ width: '100%', height: '100%' }}>
            <Marker
                coordinate={{ latitude: 21.1557399, longitude: -86.8200826 }}
                title='Ubicación de alguien'
                description='Jiovany Rafael'
            />
            {position == undefined ? null : (
                <MapViewDirections
                    origin={{ latitude: position.latitude, longitude: position.longitude }}
                    destination={{ latitude: 21.1557399, longitude: -86.8200826 }}
                    apikey={API_GOOGLE.API_KEY_GOOGLE}
                    mode={"DRIVING"}
                    strokeColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                    onStart={(params) => console.log(params)} />
            )}
        </MapView>
    )
}

export default MapsScreen;