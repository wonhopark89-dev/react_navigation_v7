/**
 * created by : wonhopark89@gmail.com
 * created at : 2025/01/07 00:19:45
 */
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
      }}>
      <Text>HomeScreen</Text>
      <Button
        title={'Go to A1TabScreen'}
        onPress={() => navigation.navigate('ATab')}
      />
      <Button
        title={'Go to EtcScreen'}
        onPress={() =>
          navigation.navigate('Etc', {
            name: 'theus',
            age: 11,
            info: {message: 'hello', data: 1234},
          })
        }
      />
      <Button
        title={'Preload EtcScreen'}
        onPress={() =>
          navigation.preload('Etc', {
            name: '엘언니',
            age: 30,
            info: {message: 'goodbye', data: 5678},
          })
        }
      />
    </View>
  );
};

export default HomeScreen;
