import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigatorBar from './components/NavigatorBar';
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as React from "react";
import { Button } from 'react-native-paper';

WebBrowser.maybeCompleteAuthSession();

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null);
  const [request, response, promptAsync] = Google.useAuthRequest({
    webClientId: 
    "939512479889-opsos7f477cu02t70gobo0m0aad79ti5.apps.googleusercontent.com",
    iosClientId:""
  });
  return (
    <NavigationContainer>
      <View>
        <Button title="Sign in with Google" onPress={promptAsync}/>
      </View>
      <NavigatorBar></NavigatorBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
