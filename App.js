import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNav, DashboardNav } from "./src/routes";
import { StatusBar, View } from "react-native";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#1b1464" barStyle="light-content" />
      <NavigationContainer>
        <Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
          <Screen name="Auth" component={AuthNav} />
          <Screen name="Dashboard" component={DashboardNav} />
        </Navigator>
      </NavigationContainer>
    </View>
  )
}


export default App;

/*return (

    <SafeAreaView>
    <Text>
      Montse cara de pie
    </Text>
    </SafeAreaView>
  )
 //<login />;*/

