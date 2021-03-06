import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import { FormButton } from '../../../components';
import { Colors, Chatbot } from '../../../utils';

const ChatBotScreen = () => {
    const [chatbot, setChatbot] = useState(Chatbot);
    const [message, setMessage] = useState('');
    const [change, setChange] = useState(false);

    const [messagesBetweenBotPerson, setMessagesBetweenBotPerson] = useState([chatbot[0], chatbot[1]]);

    const renderMessage = ({ item }) => {
        return (
            <View style={{ width: '100%' }}>
                {item.how == "Bot" ? (
                    <View style={{ width: '65%' }}>
                        <View style={[styles.message, { backgroundColor: Colors.PRIMARY_COLOR_NARANJALOGO, marginLeft: 10 }]}>
                            <Text style={{ color: '#fff', fontSize: 15 }}>{item.message}</Text>
                        </View>
                    </View>
                ) : (
                    <View style={{ alignContent: 'flex-end', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <View style={{ width: '65%' }}>
                            <View style={[styles.message, { backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO, marginRight: 10 }]}>
                                <Text style={{ color: '#fff', fontSize: 15 }}>{item.message}</Text>
                            </View>
                        </View>
                    </View>
                )}
            </View>
        );
    }

    const sendMessage = () => {
        let copy = messagesBetweenBotPerson;
        let bandera = false;
        let mesPer = {
            "message": message,
            "how": "Person",
            "id": copy.length + 1
        }
        copy.push(mesPer);
        let text = message.toLowerCase();
        chatbot.map((value) => {
            let textNormalize = text.normalize("NFD").replace(/[\u0300-\u036f-\u0020]/g, "");
            if (value.find === textNormalize) {
                let mesChat = {
                    "message": value.message,
                    "how": value.how,
                    "id": copy.length + 1
                }
                copy.push(mesChat);
                bandera = true;
            }
        });
        if (!bandera) {
            let mesChat = {
                "message": chatbot[5].message,
                "how": chatbot[5].how,
                "id": copy.length + 1
            }
            copy.push(mesChat);
            mesChat = {
                "message": chatbot[6].message,
                "how": chatbot[6].how,
                "id": copy.length + 1
            }
            copy.push(mesChat);
        }
        setMessagesBetweenBotPerson(copy);
        setMessage('');
        setChange(!change);
    }

    return (
        <View style={styles.content}>
            <View style={{ height: '85%' }}>
                {messagesBetweenBotPerson.length > 0 ? (
                    <FlatList
                        data={messagesBetweenBotPerson}
                        renderItem={renderMessage}
                        keyExtractor={item => item.id}
                        style={{ width: '100%', height: '100%' }} />
                ) : null}
            </View>
            <View style={styles.footer}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        placeholder='Mensaje'
                        placeholderTextColor='#999'
                        value={message}
                        style={styles.textInput}
                        multiline
                        onChangeText={text => setMessage(text)} />
                    <FormButton
                        icon='send-o'
                        size={15}
                        color='#fff'
                        stylesContainer={styles.buton}
                        onPress={() => sendMessage()}
                        disabled={message == '' ? true : false} />
                </View>
            </View>
        </View>
    )
}

export default ChatBotScreen;

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#fff',
        height: '100%',
        width: '100%'
    },
    footer: {
        height: '13%',
        marginLeft: '1%',
        marginRight: '1%',
        justifyContent: 'center'
    },
    textInput: {
        color: '#000',
        width: '82%',
        marginRight: '1%',
        borderRadius: 40,
        borderColor: '#999',
        borderWidth: 1,
        paddingLeft: 10,
        height: 50
    },
    buton: {
        marginTop: 0,
        width: '14%',
        backgroundColor: Colors.PRIMARY_COLOR_AZULDELLOGO,
        borderRadius: 100,
        height: 50
    },
    message: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 5,
        paddingTop: 5,
        borderRadius: 10
    }
})