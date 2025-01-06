/**
 * created by : wonhopark89@gmail.com
 * created at : 2025/01/07 00:28:39
 */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import A1TabScreen from './tabs/A1TabScreen.tsx';
import A2TabScreen from './tabs/A2TabScreen.tsx';
import A3TabScreen from './tabs/A3TabScreen.tsx';
import A4TabScreen from './tabs/A4TabScreen.tsx';
import {Easing, View, Text} from 'react-native';

const Tab = createBottomTabNavigator();

function ATabScreen() {
  return (
    <Tab.Navigator
      // layout={({children, state, descriptors, navigation}) => {
      //   const isA4 = state.routeNames[state.index] === 'A4Tab';
      //   return (
      //     <View style={{flex: 1}}>
      //       <View style={{height: 20, backgroundColor: 'cyan'}}>
      //         <Text>{'공통'}</Text>
      //       </View>
      //       {isA4 && <Text>{'A4 일때만 나타남'}</Text>}
      //       {children}
      //     </View>
      //   );
      // }}
      screenOptions={{
        animation: 'fade',
        headerShown: false,
        tabBarPosition: 'bottom', // right, left
      }}>
      <Tab.Screen name="A1Tab" component={A1TabScreen} />
      <Tab.Screen name="A2Tab" component={A2TabScreen} />
      <Tab.Screen name="A3Tab" component={A3TabScreen} />
      <Tab.Screen
        name="A4Tab"
        component={A4TabScreen}
        options={{
          sceneStyleInterpolator: ({current}) => ({
            sceneStyle: {
              opacity: current.progress.interpolate({
                inputRange: [-1, 0, 1],
                outputRange: [0, 1, 0],
              }),
            },
          }),
          transitionSpec: {
            animation: 'timing',
            config: {
              duration: 2000,
              easing: Easing.in(Easing.ease),
            },
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default ATabScreen;
