import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootScreen from './src/RootScreen.tsx';

export default function App() {
  return (
    <NavigationContainer>
      <RootScreen />
    </NavigationContainer>
  );
}
