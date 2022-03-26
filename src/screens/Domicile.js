import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CheckBox, Icon, ListItem } from 'react-native-elements';
import FormButton from '../components/FormButton';
import Colors from '../utils/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const DomicileScreen = ({ navigation }) => {
    const [expanded, setExpanded] = useState(false);
    const [comment] = useState();
    const [check, setCheck] = useState(-1);
    const [direccion, setDireccion] = useState(-1);

    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title style={styles.titleCard}>Selecciona la dirección y el cliente</Card.Title>
                <Card.Divider />
                <ListItem.Accordion
                    content={
                        <>
                            {/* <Icon name="place" size={30} /> */}
                            <ListItem.Content>
                                <ListItem.Title>Montse</ListItem.Title>
                            </ListItem.Content>
                            <FontAwesome name={expanded ? 'chevron-up' : 'chevron-down'} size={15} color='#000' />
                        </>
                    }
                    noIcon
                    isExpanded={expanded}
                    onPress={() => setExpanded(!expanded)}
                    style={{ width: '100%' }}>
                    <ListItem style={{ width: '100%' }}>
                        <CheckBox
                            title="Dirección 1"
                            checked={direccion == 0 ? true : false}
                            onPress={() => setDireccion(0)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                            style={{ width: '100%' }}
                        />
                    </ListItem>
                    <ListItem>
                        <CheckBox
                            title="Dirección 2"
                            checked={direccion == 1 ? true : false}
                            onPress={() => setDireccion(1)}
                            checkedIcon="dot-circle-o"
                            uncheckedIcon="circle-o"
                            checkedColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
                        />
                    </ListItem>
                </ListItem.Accordion>
                <View>
                    <FormButton
                        buttonTitle="Agregar cliente"
                        onPress={() => navigation.navigate('AddClient')}
                    />
                    <FormButton
                        buttonTitle="Siguiente"
                        onPress={() => navigation.navigate('Problem')} />
                </View>
            </Card>
        </View>
    );
}

export default DomicileScreen;

const styles = StyleSheet.create({
    input: {
        padding: 1,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleCard: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    viewStyle: {
        height: '100%',
        marginTop: '-10%',
        justifyContent: 'center'
    },
    text: {
        fontFamily: 'Kufam-SemiboldItalic',
        marginBottom: 10,
        color: '#000',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    }
})