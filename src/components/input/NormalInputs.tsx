import { TextInput } from 'react-native';
import { styles } from './style';
interface inputData {
  onChangeText: Function;
  value: string;
}
export default function Normalinput(props: inputData) {
  return (
    <TextInput
      style={styles.NormalInput}
      onChangeText={props.onChangeText}
      placeholder={'예) 홍길동'}
      value={props.value}
    />
  );
}
