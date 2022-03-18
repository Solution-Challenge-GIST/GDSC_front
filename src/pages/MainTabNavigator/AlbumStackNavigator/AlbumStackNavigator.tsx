import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Album from './Album/Album';

const Stack = createStackNavigator();

export default function AlbumStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Album" component={Album} />
    </Stack.Navigator>
  );
}
