/**
 * created by : wonhopark89@gmail.com
 * created at : 2025/01/07 00:13:49
 */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen.tsx';
import ATabScreen from './ATabScreen.tsx';
import EtcScreen from './EtcScreen.tsx';

type RootStackParamList = {
  Home: undefined;
  ATab: undefined;
  Etc: {
    name: string;
    age: number;
    info: object;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name={'ATab'}
        component={ATabScreen}
        options={{headerShown: true}}
      />
      <Stack.Screen name={'Etc'} component={EtcScreen} />
    </Stack.Navigator>
  );
}

export default RootStackScreen;
