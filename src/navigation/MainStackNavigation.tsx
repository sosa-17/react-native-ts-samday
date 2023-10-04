import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DetailsScreen, HomeScreen} from '@screens/';
import {MainStackParams} from './types';

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
