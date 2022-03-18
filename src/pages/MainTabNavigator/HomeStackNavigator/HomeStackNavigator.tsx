import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home/Home';
import Test from './Test/Test';

const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
