import * as React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PreJoinPage} from './PreJoinPage';
import {RoomPage} from './RoomPage';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator>
        <Stack.Screen name="PreJoinPage" component={PreJoinPage} />
        <Stack.Screen name="RoomPage" component={RoomPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}