import React from 'react';
import { View, Title, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import HeaderScreenComponent from '../components/HeaderScreen';
import Colors from '../utils/Colors';



const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <HeaderScreenComponent title="Inicio" />
            <View style={styles.container}>
                <Card>
                    <Card.Title style={styles.titleCard}>CONTROL DE TERMITAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={require('../assets/termitas.jpg')}
                    />
                    <Text style={styles.text}>
                        Los isópteros son un infraorden de insectos
                        neópteros, conocidos vulgarmente como termitas,
                        termes, turiros o comejenes y también como hormigas
                        blancas por su semejanza superficial con las hormigas.
                    </Text>
                    {/* <Button
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO,
                        }}
                        title="VIEW NOW"
                    /> */}
                </Card>
                <Card>
                    <Card.Title style={styles.titleCard}>CONTROL DE TERMITAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={require('../assets/termitas.jpg')}
                    />
                    <Text style={styles.text}>
                        Los isópteros son un infraorden de insectos
                        neópteros, conocidos vulgarmente como termitas,
                        termes, turiros o comejenes y también como hormigas
                        blancas por su semejanza superficial con las hormigas.
                    </Text>
                    {/* <Button
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO,
                        }}
                        title="VIEW NOW"
                    /> */}
                </Card>
                <Card>
                    <Card.Title style={styles.titleCard}>CONTROL DE TERMITAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={require('../assets/termitas.jpg')}
                    />
                    <Text style={styles.text}>
                        Los isópteros son un infraorden de insectos
                        neópteros, conocidos vulgarmente como termitas,
                        termes, turiros o comejenes y también como hormigas
                        blancas por su semejanza superficial con las hormigas.
                    </Text>
                    <Button
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO,
                        }}
                        title="VIEW NOW"
                    />
                </Card>
                <Card>
                    <Card.Title style={styles.titleCard}>CONTROL DE TERMITAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0 }}
                        source={require('../assets/termitas.jpg')}
                    />
                    <Text style={styles.text}>
                        Los isópteros son un infraorden de insectos
                        neópteros, conocidos vulgarmente como termitas,
                        termes, turiros o comejenes y también como hormigas
                        blancas por su semejanza superficial con las hormigas.
                    </Text>
                    <Button
                        buttonStyle={{
                            borderRadius: 0,
                            marginLeft: 0,
                            marginRight: 0,
                            marginBottom: 0,
                            backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO,
                        }}
                        title="VIEW NOW"
                    />
                </Card>
            </View>
        </ScrollView>
    );
};
export default HomeScreen;

const styles = StyleSheet.create({
    logo: {
        height: 100,
        width: 380,
        marginTop: 30,
        resizeMode: 'contain',
    },
    titleCard: {
        fontSize: 15,
        color: '#000',
        fontWeight: 'bold',  
    },

    text: {
        fontSize: 14,
        padding: 6,
        textAlign: 'justify'
    },

    container: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textTitulo: {
        fontSize: 28,
        padding: 20,
        marginBottom: -20,
        color: '#000',
        fontWeight: 'bold'
    },

});