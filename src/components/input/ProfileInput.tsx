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
  let len;
  if (props.value.length > 19) {
    len = 2;
  } else {
    len = 1;
  }

  return (
    <View style={{ justifyContent: 'center' }}>
      <Text style={styles.ProfileName}>{props.name}</Text>
      <View style={{ ...styles.ProfileInput, height: getDisplayHeight(69) }}>
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
