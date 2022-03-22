import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput} from 'react-native';
import { Card } from 'react-native-elements';
import FormButton from '../components/FormButton';

const AddressesScreen = () => {
    return (
        <ScrollView>
            <View>
                <Card>
                    <Text style={styles.textJ}>Codigo postal</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '30%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        keyboardType="numeric"
                        maxLength={5} />

                    <Text style={styles.textJ}>Cuidad</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />

                    <Text style={styles.textJ}>Calle</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />
                    <Text style={styles.textJ}>Avenida</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />
                    <Text style={styles.textJ}>Referencia</Text>
                    <TextInput
                        style={styles.inputMultiline}
                        underlineColorAndroid="transparent"
                        textAlignVertical="top"
                        // value={despues}
                        // onChangeText={text => setDespues(text)}
                        multiline
                        numberOfLines={4}
                        selectionColor="#999" />
                    <View style={styles.view2}>
                    <Text style={[styles.textN, { width: '40%', marginRight: '20%'}]}>Número exterior</Text>
                    <Text style={styles.textN}>Número interior</Text>
                    </View>
                    <View style={styles.view2}>
                        <TextInput
                            style={[styles.inputDisabled, { width: '40%', marginRight: '20%' }]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            maxLength={5}
                            keyboardType="numeric" />
                        <TextInput
                            style={[styles.inputDisabled, { width: '40%' }]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            maxLength={5}
                            placeholder="Opcional"
                            keyboardType="numeric" />
                    </View>
                    <Text style={styles.textJ}>Colonia</Text>
                    <TextInput
                        style={[styles.inputDisabled, { width: '100%' }]}
                        underlineColorAndroid="transparent"
                        editable={true}
                        maxLength={20} />
                </Card>
                <Card style={{ marginBottom: 20}}>
                    <FormButton buttonTitle="GUARDAR DIRECCIÓN" />
                </Card>

            </View>
        </ScrollView>
    )
};

export default AddressesScreen;

const styles = StyleSheet.create({
    inputDisabled: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#999',
        height: 40,
        marginBottom: 10,
        fontSize: 15
    },
    textJ: {
        color: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    textN: {
        color: '#000',
        marginBottom: 8,
        fontSize: 15
    },
    inputMultiline: {
        borderWidth: 1,
        color: '#000',
        borderRadius: 5,
        borderColor: '#000',
        marginBottom: 10,
        fontSize: 15
    },
    view2: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 1
    },
})
