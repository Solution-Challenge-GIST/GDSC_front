import { View, Text } from 'react-native';
import React from 'react';
import Relativebutton from '../../../../components/button/RelativeButton';
import { record1Styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { getDisplayHeight } from '../../../../utility';

const data = [
  {
    junior_id: 1,
    name: '배정윤',
    relationship: '딸',
  },
  {
    junior_id: 2,
    name: '이주찬',
    relationship: '아들',
  },
  {
    junior_id: 3,
    name: '조용환',
    relationship: '손자',
  },
  {
    junior_id: 4,
    name: '조효준',
    relationship: '형',
  },
];
interface person {
  name: string;
  relationship: string;
  junior_id: number;
}
export default function Test() {
  const navigation = useNavigation();
  const onChange = (props: person) => {
    navigation.navigate('Record2', { person: props });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={true} style={{ marginBottom: 92 }}>
        <View style={record1Styles.position}>
          <Text style={record1Styles.text}>누구에게 음성을 보낼까요?</Text>
          {data.map(item => {
            return (
              <View style={{ marginTop: 30 }}>
                <Relativebutton
                  name={item.name}
                  relative={item.relationship}
                  onPress={() => onChange(item)}
                ></Relativebutton>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
