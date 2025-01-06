import * as React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import RootScreen from './src/RootScreen.tsx';
import {useLogger} from '@react-navigation/devtools';

export default function App() {
  const navigationRef = useNavigationContainerRef();

  useLogger(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <RootScreen />
    </NavigationContainer>
  );
}
