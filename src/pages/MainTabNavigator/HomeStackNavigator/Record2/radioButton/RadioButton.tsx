import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { record2Styles } from '../style';

interface Props {
  onPress: Function;
  type: 'pause' | 'play' | 'recoding' | 'unrecord' | 'stop';
}

export default function RadioButton(props: Props) {
  const { onPress, type } = props;
  console.log(type);
  return (
    <TouchableOpacity onPress={onPress}>
      {type === 'play' && (
        <Image
          style={record2Styles.buttonImage}
          source={require('../images/play.png')}
        />
      )}
      {type === 'pause' && (
        <Image
          style={record2Styles.buttonImage}
          source={require('../images/pause.png')}
        />
      )}
      {type === 'recoding' && (
        <Image
          style={record2Styles.buttonImage}
          source={require('../images/recoding.png')}
        />
      )}
      {type === 'stop' && (
        <Image
          style={record2Styles.buttonImage}
          source={require('../images/stop.png')}
        />
      )}
      {type === 'unrecord' && (
        <Image
          style={record2Styles.buttonImage}
          source={require('../images/unrecord.png')}
        />
      )}
    </TouchableOpacity>
  );
}
