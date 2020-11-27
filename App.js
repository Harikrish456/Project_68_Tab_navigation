
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import InstagramScreen from './in';
import FaceBookScreen from './fb';

export default function App() {
  return (
    <AppContainer />
  );
}

const TabNavigator = createBottomTabNavigator({
  FaceBook:{screen: FaceBookScreen},
  Instagram:{screen: InstagramScreen}
});

const AppContainer = createAppContainer(TabNavigator);


