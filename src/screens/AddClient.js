import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import FormButton from '../components/FormButton';

const AddClientScreen = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("se");
    const [name, setName] = useState('');
    const [razon, setRazon] = useState('');
    const [rfc, setRfc] = useState('');

    return (
        <View>
            <Card>
                <Text style={styles.textJ}>Tipo de cliente</Text>
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
            </Card>
            <Card>
                <Text style={styles.textJ}>Nombre del cliente</Text>
                <View>
                    <TextInput style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={selectedValue != "se" ? true : false}
                        maxLength={100}
                        placeholder="Nombre"
                        placeholderTextColor="#999"
                        value={name}
                        onChangeText={text => setName(text)} />
                </View>
                <Text style={styles.textJ}>Razón social</Text>
                <View>
                    <TextInput style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={selectedValue != "se" && selectedValue != "re" ? true : false}
                        maxLength={100}
                        placeholder="Razón social"
                        placeholderTextColor="#999"
                        value={razon}
                        onChangeText={text => setRazon(text)} />
                </View>
                <Text style={styles.textJ}>RFC</Text>
                <View>
                    <TextInput style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={selectedValue == "em" ? true : false}
                        maxLength={100}
                        placeholder="RFC"
                        placeholderTextColor="#999"
                        value={rfc}
                        onChangeText={text => setRfc(text)} />
                </View>
            </Card>
            <Card>
                <Text style={styles.textJ}>Direcciones</Text>
                <Card.Divider />
                <View>
                    <FormButton
                        buttonTitle="Agregar dirección"
                        onPress={() => navigation.navigate('Addresses', {
                            'screen': 'AddClient'
                        })}
                        disabled={(value) => {
                            if (selectedValue == 'se') {
                                return !value;
                            }
                            if (selectedValue == 'es') {
                                if (name || razon) {
                                    return !value;
                                } else {
                                    return value;
                                }
                            }
                        }} />
                </View>
            </Card>
        </View>
    )
}

export default AddClientScreen;

const styles = StyleSheet.create({
    textJ: {
        color: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    inputDisabled: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    },

})