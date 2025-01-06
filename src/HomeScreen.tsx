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
    </View>
  );
};

export default HomeScreen;
