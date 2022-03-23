import { View, Text, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Album() {
  const navigation = useNavigation();
  const onSenior = () => {
    navigation.navigate('SeniorAlbum');
  };
  const onJunior = () => {
    navigation.navigate('JuniorAlbum');
  };
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onSenior}>
        <Text>Album for Senior</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onJunior}>
        <Text>Album for Junior</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
