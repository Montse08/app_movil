import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderScreen } from '../components';
import FormButton from '../components/FormButton';
import { Data } from '../utils';

const ServiceOrdenScreen = () => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(Data);
    }, []);

    const renderData = (value, index) => {
        return (
            <Card key={index}>
                <Card.Title>{value.title}</Card.Title>
                <Card.Divider />
                <Text style={{ color: '#000' }}>{value.description}</Text>
                <Text style={{ color: '#000' }}>{value.trade_name}</Text>
                <FormButton buttonTitle="Ver detalles" />
            </Card>
        );
    }

    return (
        <ScrollView>
            <HeaderScreen title="Ordenes de Servicio"></HeaderScreen>
            {Data.map((value, index) => renderData(value, index))}
            <View style={{ marginTop: 10 }}></View>
        </ScrollView>
    );
}

export default ServiceOrdenScreen;