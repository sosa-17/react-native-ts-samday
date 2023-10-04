import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigation from './MainStackNavigation';

const RootStackNavigation = () => {
  return (
    <NavigationContainer>
      <MainStackNavigation />
    </NavigationContainer>
  );
};

export default RootStackNavigation;
