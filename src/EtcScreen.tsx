/**
 * created by : wonhopark89@gmail.com
 * created at : 2025/01/07 00:19:45
 */
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';

const EtcScreen = () => {
  const navigation = useNavigation();

  const [data, setData] = useState<unknown>(null);

  const fetchData = async () =>
    new Promise(resolve => {
      setTimeout(() => {
        console.log('데이터를 가져오세요');
        resolve('mock data');
      }, 3000);
    });

  useEffect(() => {
    console.log('--- useEffect ---- EtcScreen');
    fetchData().then(response => {
      console.log('response:', response);
      setData(response);
    });
  }, []);

  useEffect(() => {
    if (navigation.isFocused()) {
      console.log('--- useEffect: isFocused ---- EtcScreen');
    }
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FAD4AE',
      }}>
      <Text>EtcScreen</Text>
      {!data ? (
        <View style={{padding: 10, backgroundColor: 'white'}}>
          <Text>{'데이터 없어요'}</Text>
        </View>
      ) : (
        <View style={{padding: 10, backgroundColor: 'cyan'}}>
          <Text>{'데이터 있어요'}</Text>
        </View>
      )}
    </View>
  );
};

export default EtcScreen;
