import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { record2Styles } from '../style';

interface Props {
  onPress: Function;
  type: 'record' | 'stop';
}

export default function RadioButton(props: Props) {
  const { onPress, type } = props;
  return (
    <TouchableOpacity onPress={onPress}>
      {type === 'record' && (
        <Image
          style={record2Styles.buttonImage}
          source={require('../images/record.png')}
        />
      )}
      {type === 'stop' && (
        <Image
          style={record2Styles.buttonImage}
          source={require('../images/stop.png')}
        />
      )}
    </TouchableOpacity>
  );
}
