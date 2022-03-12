import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import login from "./src/screens/login";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNav, DashboardNav } from "./src/routes";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Screen name="Auth" component={AuthNav} />
        <Screen name="Dashboard" component={DashboardNav} />
      </Navigator>
    </NavigationContainer>
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

