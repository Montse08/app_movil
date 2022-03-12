import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../utils/Colors';
import { windowHeight } from '../utils/Dimentions';

export default function Footer() {
    return (
        <View style={styles.viewFooter}>
            <Text>HORRIBLE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        width: "115%",
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        height: 50,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
});