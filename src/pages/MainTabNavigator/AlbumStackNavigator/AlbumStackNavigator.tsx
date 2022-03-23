import { View, Text } from 'react-native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SeniorAlbum from './Album/SeniorAlbum';
import JuniorAlbum from './Album/JuniorAlbum';
import Album from './Album/Album';
const Stack = createStackNavigator();

export default function AlbumStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Album" component={Album} />
      <Stack.Screen name="SeniorAlbum" component={SeniorAlbum} />
      <Stack.Screen name="JuniorAlbum" component={JuniorAlbum} />
    </Stack.Navigator>
  );
}
