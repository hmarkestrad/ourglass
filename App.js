import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs'
//app.listen(process.env.PORT || 19006);

// authorize jwt if true dash else account/signup/login
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
}