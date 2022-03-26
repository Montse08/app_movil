import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Card, ListItem } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

const OrderDetailScreen = () => {
    const servicios = [
        {
            "name": "Base"
        },
        {
            "name": "Factura"
        }
    ];

    const plagas = [
        {
            "name": "Cucaracha Americana"
        },
        {
            "name": "Araña"
        },
        {
            "name": "Hormiga"
        }
    ]

    const metodos = [
        {
            "name": "Aspersión"
        },
        {
            "name": "Micronización"
        }
    ]

    const productos = [
        {
            "name": "Fipronil"
        },
        {
            "name": "Cipermetrina"
        },
        {
            "name": "Thiametoxam"
        }
    ]

    const renderItem = (value, index) => {
        return (
            <ListItem key={index} bottomDivider>
                <ListItem.Content>
                    <ListItem.Title style={{ fontSize: 15 }}>{value.name}</ListItem.Title>
                </ListItem.Content>
            </ListItem>
        );
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
            <Card containerStyle={styles.elevation}>
                <Card.Title style={styles.title}>Fechas y Horas</Card.Title>
                <Card.Divider />
                <Text style={[styles.text, { fontWeight: 'bold' }]}>Fecha de solicitud: <Text style={{ fontWeight: 'normal' }}>02/marzo/2022</Text> </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>Fecha de aplicación: <Text style={{ fontWeight: 'normal' }}>02/marzo/2022</Text> </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>Hora de entrada: <Text style={{ fontWeight: 'normal' }}>10:00 am</Text> </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>Hora de salida: <Text style={{ fontWeight: 'normal' }}>11:12 am</Text> </Text>
            </Card>
            <Card containerStyle={styles.elevation}>
                <Card.Title style={styles.title}>Tipo(s) de Servicio(s)</Card.Title>
                <Card.Divider />
                {servicios.map((value, index) => renderItem(value, index))}
            </Card>
            <Card containerStyle={styles.elevation}>
                <Card.Title style={styles.title}>Plagas Controladas</Card.Title>
                <Card.Divider />
                {plagas.map((value, index) => renderItem(value, index))}
            </Card>
            <Card containerStyle={styles.elevation}>
                <Card.Title style={styles.title}>Método(s) Aplicado(s)</Card.Title>
                <Card.Divider />
                {metodos.map((value, index) => renderItem(value, index))}
            </Card>
            <Card containerStyle={styles.elevation}>
                <Card.Title style={styles.title}>Productos</Card.Title>
                <Card.Divider />
                {productos.map((value, index) => renderItem(value, index))}
            </Card>
            <Card containerStyle={styles.elevation}>
                <Card.Title style={styles.title}>Recomendaciones</Card.Title>
                <Card.Divider />
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                    Antes: <Text style={{ fontWeight: 'normal' }}>
                        Se recomienda que hagan una limpieza previa
                    </Text>
                </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                    Durante: <Text style={{ fontWeight: 'normal' }}>
                        Se recomienda que durante el servicio no pasen por las áreas que se están desinfectando
                    </Text>
                </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                    Después: <Text style={{ fontWeight: 'normal' }}>
                        Se recomienda que no entren a las zonas desinfectadas
                    </Text>
                </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                    Tiempo de reentrada: <Text style={{ fontWeight: 'normal' }}>
                        45 min
                    </Text>
                </Text>
                <Text style={[styles.text, { fontWeight: 'bold' }]}>
                    Recomendaciones generales: <Text style={{ fontWeight: 'normal' }}>
                        No mover los objetos puestos por el personal
                    </Text>
                </Text>
            </Card>
        </ScrollView>
    )
}

export default OrderDetailScreen;

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        color: '#000'
    },
    text: {
        color: '#000',
        fontSize: 15,
        marginBottom: 5
    },
    elevation: {
        shadowColor: '#470000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5
    }
})