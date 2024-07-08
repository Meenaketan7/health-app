import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {PublicRouteProps} from '../../routes/public/types';
import {Box, Text, Pressable} from 'native-base';

const Onboarding = () => {
  const {navigate} = useNavigation<PublicRouteProps>();
  return (
    <Box>
      <Pressable onPress={() => navigate('Login')}>
        <Text>Onboarding</Text>
      </Pressable>
    </Box>
  );
};

export default Onboarding;
