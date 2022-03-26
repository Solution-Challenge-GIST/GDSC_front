import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { questionBoxStyles } from './style';
import { getDisplayHeight, getDisplayWidth } from '../../utility';
interface Props {
  payload: string;
}

export default function QuestionBox(props: Props) {
  const { payload } = props;
  return (
    <TouchableOpacity>
      <View
        style={{
          ...questionBoxStyles.container,
        }}
      >
        <Image
          style={{ width: getDisplayWidth(73), height: getDisplayHeight(73) }}
          source={require('./QuestionBoxImage/Speaker.png')}
        />
        <Text
          style={{
            marginLeft: getDisplayWidth(16),
            ...questionBoxStyles.font,
          }}
        >
          {payload}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
