import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { questionBoxStyles } from './style';
interface Props {
  payload: string;
}

export default function QuestionBox(props: Props) {
  const { payload } = props;
  return (
    <TouchableOpacity>
      <View style={questionBoxStyles.container}>
        <View
          style={{
            backgroundColor: 'gray',
            width: 73,
            height: 73,
            marginRight: 16,
          }}
        ></View>
        <Text style={questionBoxStyles.font}>{payload}</Text>
      </View>
    </TouchableOpacity>
  );
}
