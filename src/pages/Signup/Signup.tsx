import { View, Text, Image, Linking } from 'react-native';
import React, { useState } from 'react';
import Normalinput from '../../components/input/NormalInputs';
import NormalButton from '../../components/button/NormalButton';
import { signUpstyles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
export default function Signup() {
  const navigation = useNavigation();
  const [hasName, setHasName] = useState(false);
  const [hasAge, setHasAge] = useState(false);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  const onName = () => {
    if (hasName) {
      setHasAge(!hasAge);
    }
    setHasName(!hasName);
  };
  const onMain = () => {
    navigation.replace('MainTabNavigator');
  };
  const onPress = () => {
    console.log('음성이 나옵니다.');
  };
  return (
    <View>
      {!hasName && !hasAge && (
        <>
          <View style={signUpstyles.position}>
            <TouchableOpacity onPress={onPress}>
              <Image
                style={signUpstyles.image}
                source={require('./voice.png')}
              />
            </TouchableOpacity>
            <Text style={signUpstyles.MainText}>당신의 이름은 무엇인가요?</Text>
            <Normalinput onChangeText={setName} value={name} />
            <View style={signUpstyles.button}>
              <NormalButton text={'다음으로'} onPress={onName} />
            </View>
          </View>
        </>
      )}
      {hasName && !hasAge && (
        <>
          <View style={signUpstyles.position}>
            <TouchableOpacity onPress={onPress}>
              <Image
                style={signUpstyles.image}
                source={require('./voice.png')}
              />
            </TouchableOpacity>
            <Text style={signUpstyles.MainText}>나이가 어떻게 되시나요?</Text>
            <Normalinput onChangeText={setAge} value={age} />
            <View style={signUpstyles.button}>
              <NormalButton text={'다음으로'} onPress={onName} />
            </View>
          </View>
        </>
      )}
      {!hasName && hasAge && (
        <>
          <View style={signUpstyles.position}>
            <TouchableOpacity
              onPress={() => Linking.openURL('https://younghwan.tistory.com/')}
            >
              <Text style={signUpstyles.MainText}>개인정보 동의서보기</Text>
            </TouchableOpacity>
            <NormalButton text={'동의 어 보감'} onPress={onName} />
          </View>
        </>
      )}
      {hasName && hasAge && (
        <View style={signUpstyles.finalView}>
          <Image
            style={signUpstyles.heartImage}
            source={require('./heart.png')}
          />
          <Image
            style={signUpstyles.radioImage}
            source={require('./radio.png')}
          />
          <View style={signUpstyles.finalTextView}>
            <Text style={signUpstyles.finalText}>환영합니다!</Text>
          </View>
          <View style={signUpstyles.finalTextView}>
            <Text>가족과의 추억을</Text>
            <Text>음성으로 기록해보세요!</Text>
          </View>
          <View style={signUpstyles.finalbutton}>
            <NormalButton text={'완료'} onPress={onMain} />
          </View>
        </View>
      )}
    </View>
  );
}
