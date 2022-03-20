import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { record2Styles } from './style';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';
import RadioButton from './radioButton/RadioButton';

export default function Record2() {
  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          marginTop: getDisplayHeight(120),
          marginHorizontal: getDisplayWidth(19),
        }}
      >
        <Text style={record2Styles.font}>버튼을 누르면 기록이 시작돼요.</Text>
        <Image
          style={record2Styles.radioImage}
          source={require('./images/radio.png')}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <RadioButton
            type="unrecord"
            onPress={() => console.log('unrecord')}
          />
          <RadioButton type="pause" onPress={() => console.log('pause')} />
          <RadioButton type="play" onPress={() => console.log('play')} />
          <RadioButton type="stop" onPress={() => console.log('stop')} />
        </View>
      </View>
    </SafeAreaView>
  );
}
