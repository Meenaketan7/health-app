import {View, TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PublicRouteProps} from '../../routes/public/types';

const Onboarding = () => {
  const {navigate} = useNavigation<PublicRouteProps>();
  return (
    <View>
      <TouchableOpacity onPress={() => navigate('Login')}>
        <Text>Onboarding</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Onboarding;
