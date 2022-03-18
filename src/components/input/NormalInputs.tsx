import { TextInput } from 'react-native';
import { useState } from 'react';
import { styles } from './style';

export default function Normalinput() {
  const [text, setText] = useState('');

  return (
    <TextInput
      style={styles.NormalInput}
      onChangeText={setText}
      placeholder={'예) 홍길동'}
      value={text}
    />
  );
}
