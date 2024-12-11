import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './Screen/Welcome';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SingIn from './Screen/SingIn';
import Login from './Screen/Login';

function App(): React.JSX.Element {
  const Stack = createStackNavigator();
  return (
    <GestureHandlerRootView style={{flex:1}}>
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer >
        <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent={true}
      />
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Welcome" component={Welcome}/>
          <Stack.Screen name="SingIn" component={SingIn}/>
          <Stack.Screen name="Login" component={Login}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
