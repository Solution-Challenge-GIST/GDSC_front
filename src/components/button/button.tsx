import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';
export default function Normalbutton() {
  const onClick = () => {
    console.log('hi');
  };
  return (
    <TouchableOpacity onPress={onClick}>
      <Text style={styles.Normalbutton}>다음으로</Text>
    </TouchableOpacity>
  );
}
