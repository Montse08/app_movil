import React from "react";
import { Text } from "react-native";

const ServiceOrderFormScreen = ({ route, navigation }) => {
    const { orderData } = route.params;

    console.log(orderData);

    return (
        <Text>Hola</Text>
    )
}

export default ServiceOrderFormScreen;