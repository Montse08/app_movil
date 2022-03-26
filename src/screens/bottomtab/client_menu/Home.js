import React from 'react';
import { View, Title, StyleSheet, ScrollView } from 'react-native';
import { Text, Card, Button } from 'react-native-elements';
import { HeaderScreen } from '../../../components';
import { Colors } from '../../../utils';

const HomeScreen = ({ navigation }) => {
    return (
        <ScrollView>
            <HeaderScreen title="Inicio" />
            <View style={styles.container}>
                <Card
                    containerStyle={{ width: '90%', margin: 20, borderRadius: 10 }}>
                    <Card.Title style={{fontSize: 18, color: Colors.PRIMARY_COLOR_AZULDELLOGO}}>
                        PROMOCIONES
                    </Card.Title>
                </Card>
                <Card>
                    <Card.Divider />
                    <Card.Image
                        style={styles.image}
                        source={require('../../../assets/Fumicar-Promo3.png')}
                    />
                </Card>
                <Card
                    containerStyle={{ width: '90%', margin: 20, borderRadius: 10 }}>
                    <Card.Title style={{fontSize: 18, color: Colors.PRIMARY_COLOR_AZULDELLOGO}}>
                        SERVICIOS
                    </Card.Title>
                </Card>
                <Card >
                    <Card.Title style={styles.titleCard}>FUMIGACIÓN GENERAL</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 310, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/fuigacion.jpg')}
                    />
                    <Text style={styles.text}>
                        La fumigación se refiere a llevar a cabo con humo,
                        gases o vapores, la purificación de una sitio o zona,
                        con algún producto químico.
                    </Text>
                </Card>
                <Card >
                    <Card.Title style={styles.titleCard}>CONTROL DE MOSCAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 310, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/mosca.png')}
                    />
                    <Text style={styles.text}>
                        Existes varios tipos de moscas, todas son portadoras de bacterias,
                        mismas que pueden poner en riesgo la salud de las personas.
                        Fumicar fumigaciones en Cancún.
                    </Text>
                </Card>
                <Card >
                    <Card.Title style={styles.titleCard}>CONTROL DE CUCARACHAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 310, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/cu.jpg')}
                    />
                    <Text style={styles.text}>
                        Los tipos de cucaracha más común son 4.
                    </Text>
                </Card>
                <Card >
                    <Card.Title style={styles.titleCard}>CONTROL DE HORMIGAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 310, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/hormi.png')}
                    />
                    <Text style={styles.text}>
                        Las hormigas habitan en todo el mundo,
                        prácticamente no existe una región o zona donde no se les haya visto.
                    </Text>
                </Card>
                <Card>
                    <Card.Title style={styles.titleCard}>CONTROL DE TERMITAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 300, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/isect.jpg')}
                    />
                    <Text style={styles.text}>
                        Los isópteros son un infraorden de insectos
                        neópteros, conocidos vulgarmente como termitas,
                        termes, turiros o comejenes y también como hormigas
                        blancas por su semejanza superficial con las hormigas.
                    </Text>
                </Card>
                <Card>
                    <Card.Title style={styles.titleCard}>CONTROL DE CHINCHES</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 310, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/bic.jpg')}
                    />
                    <Text style={styles.text}>
                        Cimex lectularius, vulgarmente
                        conocido como chinche o chinche de cama,
                        es un insecto hemíptero de la familia Cimicidae.
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
                    <Card.Title style={styles.titleCard}>CONTROL DE ROEDORES</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 310, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/rata.png')}
                    />
                    <Text style={styles.text}>
                        Las especies más usuales en los entornos
                        urbanos son R. rattus y R. norvegicus, todas
                        las eliminamos de tu casa o tu negocio.
                    </Text>
                </Card>
                <Card>
                    <Card.Title style={styles.titleCard}>CONTROL DE ACAROS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ width: 310, height: 240, resizeMode: 'stretch' }}
                        source={require('../../../assets/aca.jpg')}
                    />
                    <Text style={styles.text}>
                        Los ácaros del polvo son pequeños animales microscópicos,
                        miden aproximadamente 0,3 milímetros.
                    </Text>
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
    image: {
        resizeMode: 'stretch',
        width: 310,
        height: 250,
    }

});