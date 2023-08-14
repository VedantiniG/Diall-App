import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import WatchPage from './WatchPage';
import ProfilePage from './ProfilePage';
import AskPage from './AskPage';

const Bar = createMaterialBottomTabNavigator();

const NavigatorBar = () => {
    return (
        <Bar.Navigator
          barStyle={{backgroundColor: 'black'}}
          activeColor="white"
          inactiveColor="gray"
          shifting={true}
        >
            <Bar.Screen 
              name="Watch" 
              component={WatchPage} 
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="television" color={color} size={30} />
                ),
              }}
            />
            <Bar.Screen 
              name="Ask" 
              component={AskPage} 
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="camera" color={color} size={30} />
                )
              }}
            />
            <Bar.Screen 
              name="Profile" 
              component={ProfilePage} 
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="account" color={color} size={30} />
                )
              }}
            />
        </Bar.Navigator>
    )
}

export default NavigatorBar;