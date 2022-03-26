import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../utils';

const HeaderScreenComponent = ({ title }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.title}>{title}</Text>
        </View>

    );
}

const styles = StyleSheet.create({
    view: {
        width: "100%",
        height: 50,
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        paddingLeft: 20
    }
})

export default HeaderScreenComponent;