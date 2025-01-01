/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from './src/screens/LoginScreen';
import { SignUpScreen } from './src/screens/SignUpScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ title: 'Login' }}
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUpScreen}
          options={{ title: 'Sign Up' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;