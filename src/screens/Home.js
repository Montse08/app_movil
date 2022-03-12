import React from 'react';
import { View, Text, Button } from 'react-native';
import FormButton from '../components/FormButton';

const Home = ({ navigation }) => {
    return (
        <View>
            <Text>ESTAMOS EN HOME LPTM   </Text>
            <FormButton
            buttonTitle= "OPRIMEME"
            onPress={() => navigation.navigate('Login')}
            />
            {/* <Button
            buttonTitle="OPRIMEME"
            // onPress={() => navigation.navigate('Login')}    
            /> */}
        </View>
    );
};
export default Home;