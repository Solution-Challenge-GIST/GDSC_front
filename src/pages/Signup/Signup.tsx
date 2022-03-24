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
    console.log('voice play.');
  };
  return (
    <View>
      {!hasName && !hasAge && (
        <>
          <View style={signUpstyles.position}>
            <TouchableOpacity onPress={onPress}>
              <Image
                style={signUpstyles.image}
                source={require('./SignupImages/voice.png')}
              />
            </TouchableOpacity>
            <Text style={signUpstyles.MainText}>What is your name?</Text>
            <Normalinput
              placeholder={'ex) Jane/Jone Doe'}
              onChangeText={setName}
              value={name}
            />
            <View style={signUpstyles.button}>
              <NormalButton text={'Next'} onPress={onName} />
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
                source={require('./SignupImages/voice.png')}
              />
            </TouchableOpacity>
            <Text style={signUpstyles.MainText}>What is your age?</Text>
            <Normalinput
              placeholder={'ex) 60'}
              onChangeText={setAge}
              value={age}
            />
            <View style={signUpstyles.button}>
              <NormalButton text={'Next'} onPress={onName} />
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
              <Text style={signUpstyles.MainText}>View Privacy Agreement</Text>
            </TouchableOpacity>
            <NormalButton text={'Agree'} onPress={onName} />
          </View>
        </>
      )}
      {hasName && hasAge && (
        <View style={signUpstyles.finalView}>
          <Image
            style={signUpstyles.heartImage}
            source={require('./SignupImages/heart.png')}
          />
          <Image
            style={signUpstyles.radioImage}
            source={require('./SignupImages/radio.png')}
          />
          <View style={signUpstyles.finalTextView}>
            <Text style={signUpstyles.finalText}>Welcome!</Text>
          </View>
          <View style={signUpstyles.finalTextView}>
            <Text>Record your family</Text>
            <Text>with your voice!</Text>
          </View>
          <View style={signUpstyles.finalbutton}>
            <NormalButton text={'Complete'} onPress={onMain} />
          </View>
        </View>
      )}
    </View>
  );
}
