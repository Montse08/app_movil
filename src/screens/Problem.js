import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import FormButton from '../components/FormButton';
import InputCard from '../components/InputCard';
import Colors from '../utils/Colors';


const ProblemScreen = ({ navigation }) => {

    const [comment] = useState();

    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title style={styles.titleCard}>¿Cuál es el problema?</Card.Title>
                <Card.Divider />
                <Text style={styles.text}>
                    Describe especificamente cual es el problema a tratar, plaga o servicio que solicita.
                </Text>
                <InputCard
                    labelValue={comment}
                    placeholderText="comment"
                    autocapitalize="characters"
                    autoCorrect={false} />
                <Text style={styles.textF}>
                    Si tienes un problema de termitas se requiere
                    una visita para proporcionar costo y
                    una segunda visita para brindar el servicio.
                </Text>
                <FormButton
                    buttonTitle="SIGUIENTE"
                    onPress={() => navigation.navigate('DateAndTime')}
                />
            </Card>
        </View>
    );
}

export default ProblemScreen;

const styles = StyleSheet.create({
    viewStyle: {
        padding: -1,
        marginTop: 135,
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 35,
        justifyContent: 'center',
    },
    titleCard: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',
    },
    color_textPrivate: {
        fontSize: 13,
        fontWeight: '400',
        fontFamily: 'Lato-Regular',
        color: 'grey',
    },
    text: {
        fontFamily: 'Kufam-SemiboldItalic',
        marginBottom: 10,
        color: '#000',
        fontSize: 14,
        padding: 10,
        textAlign: 'center'
    },
    textF: {
        fontFamily: 'Kufam-SemiboldItalic',
        marginBottom: 10,
        color: Colors.PRIMARY_COLOR_AZULDELLOGO,
        fontSize: 12,
        padding: 10,
        textAlign: 'center'
    },
})