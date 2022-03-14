import React from 'react';
import { Card } from 'react-native-elements';
import { View, StyleSheet, Image, Text, TouchableOpacity, Linking } from 'react-native';
import HeaderScreenComponent from '../components/HeaderScreen';
import FormButton from '../components/FormButton';

const handleCallPress = async () => {
    await Linking.openURL("tel:+529988878151");
};
const handleInstagramPress = async () => {
    await Linking.openURL("https://instagram.com/fumicarmexico?utm_medium=copy_link");
};

const handleEmailPress = async () => {
    await Linking.openURL("mailto: ventas@fumicar.com");
};
const handleWhatsappPress = async () => {
    await Linking.openURL("https://wa.me/+529988878151");
};
const handleFacebookPress = async () => {
    await Linking.openURL("https://www.facebook.com/fumicarmexico/");
};
const handleYoutubePress = async () => {
    await Linking.openURL("https://www.youtube.com/channel/UCtwlpfj4yg03bnKhBx2VFEA");
};
const ContactScreen = () => {
    return (
        <View>
            <HeaderScreenComponent title='Contacto' />
            <Card>
                <Card.Title style={{ color: '#000' }}>REDES SOCIALES</Card.Title>
                <Card.Divider />
                <View style={styles.viewStyle}>
                    <Image
                        style={styles.image}
                        source={require('../assets/fb.png')}>
                    </Image>
                    <TouchableOpacity
                        onPress={handleFacebookPress}>
                        <Text style={styles.text}>
                            Fumigaciones del caribe fumicar
                        </Text>
                    </TouchableOpacity>
                </View>
                <Card.Divider />
                <View style={styles.viewStyle}>
                    <Image
                        style={styles.image}
                        source={require('../assets/insta.png')}>
                    </Image>
                    <TouchableOpacity
                        onPress={handleInstagramPress}>
                        <Text style={styles.text}>
                            @fumicarmexico
                        </Text>
                    </TouchableOpacity>
                </View>
                <Card.Divider />
                <View style={styles.viewStyle}>
                    <Image
                        style={styles.image}
                        source={require('../assets/gmail.png')}>
                    </Image>
                    <TouchableOpacity
                        onPress={handleEmailPress}>
                        <Text style={styles.text}>
                            ventas@fumicar.com
                        </Text>
                    </TouchableOpacity>
                </View>
                <Card.Divider />
                <View style={styles.viewStyle}>
                    <Image
                        style={styles.image}
                        source={require('../assets/yt.jpg')}>
                    </Image>
                    <TouchableOpacity
                        onPress={handleYoutubePress}>
                        <Text style={styles.text}>
                            Fumicar Fumigaciones en Cancun
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card>
            <Card>
                <Card.Title style={{ color: '#000' }}>TELÉFONO</Card.Title>
                <Card.Divider />
                <View style={styles.viewStyle}>
                    <Image
                        style={styles.image}
                        source={require('../assets/tel.png')}>
                    </Image>
                    <TouchableOpacity
                        onPress={handleCallPress}>
                        <Text style={styles.text}>
                            +529988878151
                        </Text>
                    </TouchableOpacity>
                </View>
            </Card>
            <View style={{ padding: 20 }}>
                <FormButton
                    buttonTitle="WhatsApp"
                    onPress={handleWhatsappPress}
                />
            </View>
        </View>

    )
}

export default ContactScreen;

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    text: {
        color: '#000',
        fontWeight: 'bold',
        fontSize: 13,
        width: -5
    },
    viewStyle: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

