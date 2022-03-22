import { TextInput, Text, View } from 'react-native';
import { TextStyles } from './style';

interface inputType {
  name: string;
  value: string;
}
export default function NormalText(props: inputType) {
  return (
    <View>
      <Text style={TextStyles.NameText}>{props.name}</Text>
      <View style={TextStyles.ValueTextView}>
        <Text style={TextStyles.ValueText}>{props.value}</Text>
      </View>
    </View>
  );
}
