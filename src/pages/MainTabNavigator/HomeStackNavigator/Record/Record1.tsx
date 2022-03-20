import { View, Text } from 'react-native';
import React from 'react';
import Relativebutton from '../../../../components/button/RelativeButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './Re1style';
import { useNavigation } from '@react-navigation/native';
export default function Test() {
  const onChange = () => {
    console.log('hi');
  };
  return (
    <SafeAreaView>
      <View style={styles.position}>
        <View style={styles.component}>
          <Text style={styles.text}>누구에게 음성을 보낼까요?</Text>
          <View>
            <Relativebutton
              name={'배정윤'}
              relative={'딸'}
              onChange={onChange}
            ></Relativebutton>
          </View>
          <View>
            <Relativebutton
              name={'이주찬'}
              relative={'아들'}
              onChange={onChange}
            ></Relativebutton>
          </View>
          <View>
            <Relativebutton
              name={'조용환'}
              relative={'손자'}
              onChange={onChange}
            ></Relativebutton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
