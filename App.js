import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './src/components/Home';
import Buttons from './src/components/Buttons';
import Avatars from './src/components/Avatars';

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
                  backgroundColor: '#f7f7f7',
                },
                headerTintColor: '#222f3e',
                headerTitleStyle: {
                  fontWeight: '600'
                }
              }}
            />

            <HomeStack.Screen 
              name="Buttons" 
              component={Buttons} 
              options={{
                title: 'Buttons', 
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#f7f7f7',
                },
                headerTintColor: '#222f3e',
                headerTitleStyle: {
                  fontWeight: "500"
                },
                headerBackImage: () => (<Ionicons name="ios-arrow-round-back" size={30} style={{color: '#222f3e', marginLeft: 20}} />)
              }} 
            />

            <HomeStack.Screen 
              name="Avatars" 
              component={Avatars} 
              options={{
                title: 'Avatars', 
                headerBackTitleVisible: false,
                headerStyle: {
                  backgroundColor: '#f7f7f7',
                },
                headerTintColor: '#222f3e',
                headerTitleStyle: {
                  fontWeight: "500"
                },
                headerBackImage: () => (<Ionicons name="ios-arrow-round-back" size={30} style={{color: '#222f3e', marginLeft: 20}} />)
              }} 
            />

          </HomeStack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
  );
}