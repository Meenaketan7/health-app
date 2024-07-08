import React from 'react';

import Router from './src/Router';
import {NavigationContainer} from '@react-navigation/native';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
