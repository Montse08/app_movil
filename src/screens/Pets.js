import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import FormButton from '../components/FormButton';



const PetsScreen = ({ navigation }) => {
    const [selectedCheck, setSelectedCheck] = useState(0);
    
    return (
        <View style={styles.viewStyle}>
            <Card>
                <Card.Title style={styles.titleCard}>¿Tiene mascotas?</Card.Title>
                <Card.Divider />
                <CheckBox
                    title='Si'
                    checkedIcon='dot-circle-o'
                    checkedColor='#1b1464'
                    checked={selectedCheck == 0 ? true : false}
                    onPress={() => setSelectedCheck(0)}
                    uncheckedIcon='circle-o'
                />
                <CheckBox
                    title='No'
                    checkedIcon='dot-circle-o'
                    checkedColor='#1b1464'
                    checked={selectedCheck == 1 ? true : false}
                    onPress={() => setSelectedCheck(1)}
                    uncheckedIcon='circle-o'
                />
                <FormButton
                    buttonTitle="SIGUIENTE"
                    onPress={() => navigation.navigate('TypeOfService')}
                />
            </Card>
        </View>
    );
}

export default PetsScreen;

const styles = StyleSheet.create({

titleCard: {
    fontSize: 15,
    color: '#000',
    fontWeight: 'bold',
},
viewStyle: {
    padding: 2,
    marginTop: 190,
    // flexDirection: 'row',
    // alignItems: 'center'
}

})