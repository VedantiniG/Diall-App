import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import WatchPage from './WatchPage';
import ProfilePage from './ProfilePage';
import AskPage from './AskPage';

const Bar = createBottomTabNavigator();

const NavigatorBar = () => {
    return (
        <Bar.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home') {
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'ios-list' : 'ios-list-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
            <Bar.Screen name="WatchPage" component={WatchPage} />
            <Bar.Screen name="AskPage" component={AskPage} />
            <Bar.Screen name="ProfilePage" component={ProfilePage} />
        </Bar.Navigator>
    )
}

export default NavigatorBar;