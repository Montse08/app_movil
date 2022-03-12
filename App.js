import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import login from "./src/screens/login";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthNav } from "./src/routes";

const { Navigator, Screen } = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <AppStack.Navigator>
        <AppStack.Screen
          name="login"
          component={login}
          options={{
            headerShown: false,
          }}></AppStack.Screen>
      </AppStack.Navigator> */}
      <Navigator initialRouteName="Auth" screenOptions={{ headerShown: false }}>
        <Screen name="Auth" component={AuthNav} />
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

