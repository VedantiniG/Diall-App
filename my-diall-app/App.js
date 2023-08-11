import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavigatorBar from './components/NavigatorBar';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NavigatorBar></NavigatorBar>
    </NavigationContainer>
  );
}