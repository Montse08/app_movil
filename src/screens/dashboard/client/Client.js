import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";
import { Card } from "react-native-elements";
import { FormButton } from "../../../components";
import { Colors } from "../../../utils";

const ClientScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <View>
                <Card>
                    <Text style={styles.textJ}>Nombre del cliente:</Text>
                    <View style={styles.viewStyle}>
                        <TextInput
                            style={[styles.inputDisabled, { width: '100%' }]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            maxLength={100} />
                    </View>
                    <Text style={styles.textJ}>Razón social:</Text>
                    <View>
                        <TextInput
                            style={[styles.inputDisabled, { width: '100%' }]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            maxLength={100} />
                    </View>
                    <Text style={styles.textJ}>RFC:</Text>
                    <View>
                        <TextInput
                            style={[styles.inputDisabled, { width: '100%' }]}
                            underlineColorAndroid="transparent"
                            editable={true}
                            maxLength={100} />
                    </View>
                </Card>
                <Card>
                    <Text style={styles.textJ}>Direcciones:</Text>
                    <Card.Divider />
                    <View style={styles.viewStyle}>
                        <Text>Sheila operadora y procesadora</Text>
                        <FormButton
                            icon="edit"
                            size={15}
                            color="#fff"
                            stylesContainer={styles.button}
                            onPress={() => navigation.navigate('Addresses', {
                                'screen': 'Client'
                            })}
                        />
                    </View>
                    <View style={styles.viewStyle}>
                        <FormButton
                            buttonTitle="Agregar dirección"
                            onPress={() => navigation.navigate('Addresses', {
                                'screen': 'Client'
                            })}
                        />
                    </View>
                </Card>
                <View>
                    <Card>
                        <FormButton buttonTitle="Guardar cliente" />
                    </Card>
                </View>
            </View>
        </ScrollView>
    )
}


export default ClientScreen;

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
    viewStyle: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 20
    },
    button: {
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        width: '13%',
        margin: 0,
        height: 40,
        position: 'absolute',
        right: 0,
        borderRadius: 100
    }
})