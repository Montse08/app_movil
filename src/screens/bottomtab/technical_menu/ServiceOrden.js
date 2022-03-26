import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { Data } from '../../../utils';
import moment from 'moment';
import 'moment/locale/es-mx';
import { FormButton, HeaderScreen } from '../../../components';

const ServiceOrdenScreen = ({ navigation }) => {
    const [data, setData] = useState();

    useEffect(() => {
        setData(Data);
    }, []);

    const renderData = (value, index) => {
        return (
            <Card key={index} containerStyle={[styles.elevation, { borderRadius: 10 }]}>
                <Card.Title style={{ fontSize: 18, color: value.iconColor }}>{value.title}</Card.Title>
                <Card.Divider />
                <FormButton
                    icon="ellipsis-v"
                    size={18}
                    color={value.iconColor}
                    stylesContainer={styles.buton}
                    onPress={() => navigation.navigate('OrderDetail')} />
                <Text style={{ color: '#000' }}>Estado: {value.status}</Text>    
                <Text style={{ color: '#000' }}>Dirección: {value.description}</Text>
                <Text style={{ color: '#000' }}>Cliente: {value.trade_name}</Text>
            </Card>
        );
    }

    return (
        <ScrollView contentContainerStyle={{ backgroundColor: '#fff', paddingBottom: 10 }}>
            <HeaderScreen title="Ordenes de servicio"></HeaderScreen>
            <Text style={{ color: '#999', marginTop: 10, textAlign: 'right', marginRight: 15 }}>
                {moment(new Date()).locale('es-mx').format('dddd DD [de] MMMM [de] YYYY')}
            </Text>
            {Data.map((value, index) => renderData(value, index))}
        </ScrollView>
    );
}

export default ServiceOrdenScreen;

const styles = StyleSheet.create({
    elevation: {
        shadowColor: '#470000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5
    },
    buton: {
        backgroundColor: 'transparent',
        marginTop: 0,
        width: 40,
        height: 40,
        position: 'absolute',
        borderRadius: 100,
        right: 0,
        top: -5
    }
});