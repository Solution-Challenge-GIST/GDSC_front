import { TextInput, Text, View } from 'react-native';
import { useState } from 'react';
import { styles } from './style';
interface inputType {
  name: string;
}
export default function ProfileInput(props: inputType) {
  const [text, setText] = useState('');

  return (
    <View>
      <Text style={styles.ProfileName}>{props.name}</Text>
      <TextInput
        style={styles.ProfileInput}
        onChangeText={setText}
        value={text}
      />
    </View>
  );
}
