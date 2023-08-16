import { NavigationContainer } from '@react-navigation/native';
import NavigatorBar from './components/NavigatorBar';
import * as WebBrowser from "expo-web-browser";
import * as React from "react";

WebBrowser.maybeCompleteAuthSession();

export default function App() {

  return (
    <NavigationContainer>
      <NavigatorBar></NavigatorBar>
    </NavigationContainer>
  );
}
