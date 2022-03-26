import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home/Home';
import Test from './Test/Test';
import Record1 from './Record/Record1';
import Record2 from './Record2/Record2';
import AddImage from './AddImage/AddImage';
const Stack = createStackNavigator();

export default function HomeStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Test" component={Test} />
      <Stack.Screen name="Record1" component={Record1} />
      <Stack.Screen name="Record2" component={Record2} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AddImage" component={AddImage} />
    </Stack.Navigator>
  );
}
