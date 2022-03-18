import { View, Text } from 'react-native';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { questionBoxStyles } from './style';

export default function QuestionBox() {
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
        <Text style={questionBoxStyles.font}>
          내 자식이 한 일 중에 가장 기뻤던 일은?
        </Text>
      </View>
    </TouchableOpacity>
  );
}
