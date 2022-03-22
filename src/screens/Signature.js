import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { Card } from "react-native-elements";
import SignatureCapture from 'react-native-signature-capture';
import FormButton from "../components/FormButton";
import { Globals } from "../utils";

const SignatureScreen = ({ navigation }) => {
    const sing = useRef();
    const [signatureTecnico, setSignatureTecnico] = useState('');
    const [signatureCliente, setSignatureCliente] = useState('');
    const [typeSignature, setTypeSignature] = useState('técnico');
    const [orderCreateAlert, setOrderCreateAlert] = useState(false);
    const [signatureAlert, setSignatureAlert] = useState(false);

    const saveSign = () => {
        sing.current.saveImage();
    }

    const resetSign = () => {
        sing.current.resetImage();
    }

    const _onSaveEvent = (result) => {
        if (result.encoded == Globals.SIGNATURE_BLANK) {
            setSignatureAlert(true);
        } else {
            if (typeSignature == 'técnico') {
                setSignatureTecnico(result.encoded);
                resetSign();
                setTypeSignature('cliente');
            } else {
                setSignatureCliente(result.encoded);
                resetSign();
                setOrderCreateAlert(true);
            }
        }
    }

    return (
        <View style={styles.content}>
            <Card containerStyle={{ justifyContent: 'center' }}>
                <Card.Title style={{ fontSize: 18 }}>Firma del {typeSignature}</Card.Title>
                <Card.Divider />
                <View style={{ width: '100%', backgroundColor: 'red', height: 400, borderBottomColor: '#D4D8DA', borderBottomWidth: 2 }}>
                    <SignatureCapture
                        style={{ width: '100%', height: 398 }}
                        ref={sing}
                        onSaveEvent={_onSaveEvent}
                        saveImageFileInExtStorage={false}
                        showNativeButtons={false}
                        showTitleLabel={false}
                        viewMode="portrait" />
                </View>

            </Card>
            <View style={{ flexDirection: 'row', marginLeft: 20, marginRight: 20, marginTop: 5 }}>
                <FormButton
                    buttonTitle="Guardar"
                    stylesContainer={{ width: '45%', marginRight: '10%', }}
                    stylesText={{ fontSize: 18 }}
                    onPress={() => saveSign()} />
                <FormButton
                    buttonTitle="Borrar"
                    stylesContainer={{ width: '45%' }}
                    stylesText={{ fontSize: 18 }}
                    onPress={() => resetSign()} />
            </View>
            <AwesomeAlert
                show={orderCreateAlert}
                title='Orden de servicio'
                message='La orden de servicio ha sido creada'
                showConfirmButton={true}
                confirmText='Aceptar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onConfirmPressed={() => {
                    setOrderCreateAlert(false);
                    navigation.navigate('BottomTab');
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor='#3880ff' />
            <AwesomeAlert
                show={signatureAlert}
                title='Falta la firma'
                message={`La firma del ${typeSignature} no puede estar en blanco, ingresa la firma del ${typeSignature}`}
                showConfirmButton={true}
                confirmText='Aceptar'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                onConfirmPressed={() => {
                    setSignatureAlert(false);
                }}
                messageStyle={{ textAlign: 'center' }}
                confirmButtonColor='#3880ff' />
        </View>
    );
}

export default SignatureScreen;

const styles = StyleSheet.create({
    content: {
        justifyContent: 'center',
        height: '100%'
    }
});