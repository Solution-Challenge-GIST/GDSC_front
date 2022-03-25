import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { addImageButtonStyles } from './styles';
import { useNavigation } from '@react-navigation/native';

export default function AddVoiceButton() {
  const navigation = useNavigation();
  const goRecord2 = () => {
    navigation.navigate('Record2');
  };
  return (
    <TouchableOpacity onPress={goRecord2}>
      <View style={addImageButtonStyles.container}>
        <Image
          style={addImageButtonStyles.plus}
          source={require('./images/redPlusButton.png')}
        />
        <Text style={addImageButtonStyles.font}>Record your voice!</Text>
      </View>
    </TouchableOpacity>
  );
}
