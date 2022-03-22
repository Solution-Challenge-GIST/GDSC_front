import { TextInput, Text, View } from 'react-native';
import { useState } from 'react';
import { styles } from './style';
interface inputType {
  name: string;
  value: string;
  onChangeText: Function;
}
export default function ProfileInput(props: inputType) {
  return (
    <View>
      <Text style={styles.ProfileName}>{props.name}</Text>
      <TextInput
        style={styles.ProfileInput}
        onChangeText={props.onChangeText}
        value={props.value}
      />
    </View>
  );
}
