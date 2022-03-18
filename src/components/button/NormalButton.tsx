import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style.js';

interface Normal {
  text: string;
}

export function NormalButton(props: Normal) {
  const onClick = () => {
    console.log('hi');
  };
  return (
    <TouchableOpacity onPress={onClick}>
      <View style={styles.Normalbutton}>
        <Text style={styles.buttonfont}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
}
