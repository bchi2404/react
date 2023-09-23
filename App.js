import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Signup from './signup';
import Login from './login';
import Home from './home';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Home" component={Home} />
      
    </Stack.Navigator>
  </NavigationContainer>
  );
}



