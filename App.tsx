import React from 'react';

import Router from './src/Router';
import {NavigationContainer} from '@react-navigation/native';
import CustomTheme from '~/styles';
import {NativeBaseProvider} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

function App(): React.JSX.Element {
  return (
    <NativeBaseProvider
      theme={CustomTheme}
      config={{
        dependencies: {
          'linear-gradient': LinearGradient,
        },
      }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
