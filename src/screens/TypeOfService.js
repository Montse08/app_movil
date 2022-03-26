import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, CheckBox } from 'react-native-elements';
import FormButton from '../components/FormButton';
import { Picker } from '@react-native-picker/picker';
import { ScrollView, TextInput } from 'react-native-gesture-handler';

const TypeOfServiceScreen = ({ navigation }) => {

    const [selectedValue, setSelectedValue] = useState("se");
    const [selectedCheck, setSelectedCheck] = useState(0);
    const [selectedCheckd, setSelectedCheckd] = useState(0);


    return (
        <ScrollView>
            <View>
                <Card>
                    <Card.Title>Eliga a que tipo de lugar va dirigido el servicio</Card.Title>
                    <Card.Divider />
                    <Picker
                        selectedValue={selectedValue}
                        style={{ width: '100%', color: '#000' }}
                        itemStyle={{ color: '#000', backgroundColor: '#fff' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        dropdownIconColor="#000" >
                        <Picker.Item label="Seleccionar" value="se" />
                        <Picker.Item label="Escolar" value="es" />
                        <Picker.Item label="Empresarial" value="em" />
                        <Picker.Item label="Residencial" value="re" />
                    </Picker>
                    {selectedValue == 'es' || selectedValue == 'em' ? (
                        <View>
                            <Card.Title>Razón social</Card.Title>
                            <Card.Divider />
                            <TextInput
                                style={[styles.inputDisabled, { width: '100%' }]}
                                underlineColorAndroid="transparent"
                                editable={true}
                                maxLength={100} />
                            <Card.Title>Razón comercial</Card.Title>
                            <Card.Divider />
                            <TextInput
                                style={[styles.inputDisabled, { width: '100%' }]}
                                underlineColorAndroid="transparent"
                                editable={true}
                                maxLength={100} />
                        </View>
                    ) : null}
                    {selectedValue == 'em' ? (
                        <View>
                            <Card.Title>RFC</Card.Title>
                            <Card.Divider />
                            <TextInput
                                style={[styles.inputDisabled, { width: '100%' }]}
                                underlineColorAndroid="transparent"
                                editable={true}
                                maxLength={14} />
                        </View>
                    ) : null}
                </Card>
                <Card>
                    <Card.Title> ¿Con cuantas plantas cuentas? </Card.Title>
                    <Card.Divider />
                    <CheckBox
                        title='1'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheck == 0 ? true : false}
                        onPress={() => setSelectedCheck(0)}
                        uncheckedIcon='circle-o'
                    />
                    <CheckBox
                        title='2'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheck == 1 ? true : false}
                        onPress={() => setSelectedCheck(1)}
                        uncheckedIcon='circle-o'
                    />
                    <CheckBox
                        title='Más de 2'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheck == 2 ? true : false}
                        onPress={() => setSelectedCheck(2)}
                        uncheckedIcon='circle-o'
                    />
                </Card>
                <Card>
                    <Card.Title> ¿Cuenta con alberca o palapa? </Card.Title>
                    <Card.Divider />
                    <CheckBox
                        title='Alberca'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheckd == 0 ? true : false}
                        onPress={() => setSelectedCheckd(0)}
                        uncheckedIcon='circle-o'
                    />
                    <CheckBox
                        title='Palapa'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheckd == 1 ? true : false}
                        onPress={() => setSelectedCheckd(1)}
                        uncheckedIcon='circle-o'
                    />
                    <CheckBox
                        title='Ninguna'
                        checkedIcon='dot-circle-o'
                        checkedColor='#1b1464'
                        checked={selectedCheckd == 2 ? true : false}
                        onPress={() => setSelectedCheckd(2)}
                        uncheckedIcon='circle-o'
                    />

                </Card>
                <Card>
                    <FormButton
                        buttonTitle="SIGUIENTE"
                        onPress={() => navigation.navigate('DateAndTime')}
                    />
                </Card>
            </View >
        </ScrollView>
    );
}

export default TypeOfServiceScreen;

const styles = StyleSheet.create({
    inputDisabled: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    }
})