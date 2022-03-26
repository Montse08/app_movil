import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import AwesomeAlert from "react-native-awesome-alerts";
import { Colors } from "../utils";
// import Toast from 'react-native-toast-message'

const AlertComponent = ({ message, alert, title, onConfirmPressed }) => {
    /* const type = [
    //     {
    //         type: 'success',
    //         title: 'Hecho'
    //     },
    //     {
    //         type: 'info',
    //         title: 'Alerta'
    //     },
    //     {
    //         type: 'error',
    //         title: 'Ups!'
    //     }
    // ]

    // const showAlert = () => {
    //     Toast.show({
    //         type: type[position].type,
    //         text1: type[position].title,
    //         text2: data.message
    //     });
    // }

    // useEffect(() => {
    //     showAlert();
    // }, [])

    // return (
    //     <Toast
    //         topOffset={30}
    //         position='top'
    //         autoHide
    //         visibilityTime={3000} />
    ) */

    return (
        <AwesomeAlert
            show={alert}
            title={title}
            message={message}
            closeOnTouchOutside={false}
            closeOnHardwareBackPress={false}
            showCancelButton={false}
            showConfirmButton={false}
            confirmButtonColor={Colors.PRIMARY_COLOR_AZULDELLOGO}
            progressSize={50}
            onConfirmPressed={onConfirmPressed}
            messageStyle={styles.text}
        />
    )
}

export default AlertComponent;

const styles = StyleSheet.create({
    content: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#000',
        textAlign: 'center'
    }
})