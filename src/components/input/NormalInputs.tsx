import { TextInput } from 'react-native';
import { styles } from './style';
interface inputData {
  onChangeText: Function;
  value: string;
  placeholder: string;
}
export default function Normalinput(props: inputData) {
  return (
    <TextInput
      style={styles.NormalInput}
      onChangeText={props.onChangeText}
      placeholder={props.placeholder}
      value={props.value}
    />
  );
}
