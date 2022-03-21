import { View, Text } from 'react-native';
import React from 'react';
import Relativebutton from '../../../../components/button/RelativeButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { record1Styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const data = {
  relationship: [
    {
      name: '배정윤',
      relative: '딸',
    },
    {
      name: '이주찬',
      relative: '아들',
    },
    {
      name: '조용환',
      relative: '손자',
    },
    {
      name: '조효준',
      relative: '형',
    },
  ],
};
interface person {
  name: string;
  relative: string;
}
export default function Test() {
  const navigation = useNavigation();
  const onChange = (props: person) => {
    navigation.navigate('Record2', { person: props });
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ marginBottom: 0 }}
      >
        <View style={record1Styles.position}>
          <Text style={record1Styles.text}>누구에게 음성을 보낼까요?</Text>
          {data.relationship.map(({ name, relative }) => {
            return (
              <View style={{ marginTop: 30 }}>
                <Relativebutton
                  name={name}
                  relative={relative}
                  onPress={() => onChange({ name, relative })}
                ></Relativebutton>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
