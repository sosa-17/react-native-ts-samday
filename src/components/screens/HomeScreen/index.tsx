import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {MainStackParams} from '../../../navigation/types';
import {StackScreenProps} from '@react-navigation/stack';

const HomeScreen = () => {
  const {navigate} =
    useNavigation<
      StackScreenProps<MainStackParams, 'HomeScreen'>['navigation']
    >();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="Go to Details" onPress={() => navigate('DetailsScreen')} />
    </View>
  );
};

export default HomeScreen;
