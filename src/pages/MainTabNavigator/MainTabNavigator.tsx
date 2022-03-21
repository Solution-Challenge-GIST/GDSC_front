import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackNavigator from './HomeStackNavigator/HomeStackNavigator';
import AlbumStackNavigator from './AlbumStackNavigator/AlbumStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator/ProfileStackNavigator';
import { baseColor } from '../../style/share';
import { Image, StyleSheet } from 'react-native';
import { getDisplayWidth } from '../../utility';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStackNavigator"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          width: '100%',
          height: 90,
          backgroundColor: baseColor,
        },
      }}
    >
      <Tab.Screen
        name="AlbumStackNavigator"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={TabStyles.tabImage}
                source={require('./MainTabNavigatorImages/albumFocus.png')}
              />
            ) : (
              <Image
                style={TabStyles.tabImage}
                source={require('./MainTabNavigatorImages/album.png')}
              />
            ),
        }}
        component={AlbumStackNavigator}
      />
      <Tab.Screen
        name="HomeStackNavigator"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={TabStyles.tabImage}
                source={require('./MainTabNavigatorImages/homeFocus.png')}
              />
            ) : (
              <Image
                style={TabStyles.tabImage}
                source={require('./MainTabNavigatorImages/home.png')}
              />
            ),
        }}
        component={HomeStackNavigator}
      />
      <Tab.Screen
        name="ProProfileStackNavigatorfile"
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Image
                style={TabStyles.tabImage}
                source={require('./MainTabNavigatorImages/profileFocus.png')}
              />
            ) : (
              <Image
                style={TabStyles.tabImage}
                source={require('./MainTabNavigatorImages/profile.png')}
              />
            ),
        }}
        component={ProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}

const TabStyles = StyleSheet.create({
  tabImage: {
    width: getDisplayWidth(55),
    height: getDisplayWidth(55),
  },
});
