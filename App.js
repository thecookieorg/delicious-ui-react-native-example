import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/components/Home';

const HomeStack = createStackNavigator();

export default function App() {
  return (
     <AppearanceProvider>
        <StatusBar style="auto" />

        <NavigationContainer>
          <HomeStack.Navigator>
            <HomeStack.Screen 
              name="Home"
              component={Home}
              options={{
                title: 'Delicious UI',
                headerStyle: {
                  backgroundColor: '#3eae1f',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: '600'
                }
              }}
            />
          </HomeStack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
  );
}