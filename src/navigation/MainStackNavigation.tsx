import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {MainStackParams} from './types';
import {DetailsScreen, HomeScreen} from '../components/screens';

const Stack = createStackNavigator<MainStackParams>();

const MainStackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigation;
