import { TextInput, Text, View, Keyboard } from 'react-native';
import { useState } from 'react';
import { styles } from './style';
import { getDisplayHeight } from '../../utility';
interface inputType {
  name: string;
  value: string;
  onChangeText: Function;
}
export default function ProfileInput(props: inputType) {
  var len;
  if (props.value.length / 17 - parseInt(props.value.length / 17) === 0.0) {
    len = parseInt(props.value.length / 17);
  } else {
    len = parseInt(props.value.length / 17) + 1;
  }
  return (
    <View style={{ justifyContent: 'center' }}>
      <Text style={styles.ProfileName}>{props.name}</Text>
      <View
        style={{ ...styles.ProfileInput, height: getDisplayHeight(69 * len) }}
      >
        <TextInput
          style={styles.ProfileValue}
          onChangeText={props.onChangeText}
          multiline
          onSubmitEditing={Keyboard.dismiss}
          value={props.value}
        />
      </View>
    </View>
  );
}
