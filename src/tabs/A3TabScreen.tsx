/**
 * created by : wonhopark89@gmail.com
 * created at : 2025/01/07 00:33:50
 */
import {View, Text} from 'react-native';
import {useEffect} from 'react';

const A3TabScreen = () => {
  useEffect(() => {
    console.log('--- useEffect ---- A3TabScreen');
  }, []);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'orange',
      }}>
      <Text>A3TabScreen</Text>
    </View>
  );
};

export default A3TabScreen;
