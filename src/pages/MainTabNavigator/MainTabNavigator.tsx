import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator/HomeStackNavigator';
import AlbumStackNavigator from './AlbumStackNavigator/AlbumStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator/ProfileStackNavigator';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="AlbumStackNavigator" component={AlbumStackNavigator} />
      <Tab.Screen name="HomeStackNavigator" component={HomeStackNavigator} />
      <Tab.Screen
        name="ProProfileStackNavigatorfile"
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}
