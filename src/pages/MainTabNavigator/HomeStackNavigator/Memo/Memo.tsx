import { View, Text, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { Memostyles } from './style';
import NormalButton from '../../../../components/button/NormalButton';
import { bgColor } from '../../../../style/share';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Memo() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [clickSmile, SetClickSmile] = useState(false);
  const [clickHappy, SetClickHappy] = useState(false);
  const [clickSad, SetClickSad] = useState(false);
  const [clickAngry, SetClickAngry] = useState(false);

  const onPress = () => {
    console.log('hi');
    console.log(title, text);
  };
  const onSmile = () => {
    SetClickSmile(!clickSmile);
  };
  const onHappy = () => {
    SetClickHappy(!clickHappy);
  };
  const onSad = () => {
    SetClickSad(!clickSad);
  };
  const onAngry = () => {
    SetClickAngry(!clickAngry);
  };
  return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <View style={Memostyles.titlecontainer}>
          <View style={Memostyles.titleMemo}>
            <Text style={Memostyles.title}>Memo</Text>
          </View>
          <View style={Memostyles.emtioncontainer}>
            <View style={Memostyles.emotion}>
              {clickSmile ? (
                <TouchableOpacity onPress={onSmile}>
                  <Text>'웃어'</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onSmile}>
                  <Image
                    style={Memostyles.emotionSize}
                    source={require('./MemoImages/NoclickSmile.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={Memostyles.emotion}>
              {clickHappy ? (
                <TouchableOpacity onPress={onHappy}>
                  <Text>'행복'</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onHappy}>
                  <Image
                    style={Memostyles.emotionSize}
                    source={require('./MemoImages/NoclickHappy.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={Memostyles.emotion}>
              {clickSad ? (
                <TouchableOpacity onPress={onSad}>
                  <Text>'화나'</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onSad}>
                  <Image
                    style={Memostyles.emotionSize}
                    source={require('./MemoImages/NoclickSad.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
            <View style={Memostyles.emotion}>
              {clickAngry ? (
                <TouchableOpacity onPress={onAngry}>
                  <Text>'슬퍼'</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={onAngry}>
                  <Image
                    style={Memostyles.emotionSize}
                    source={require('./MemoImages/NoclickAngry.png')}
                  />
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>

        <View style={Memostyles.Memocontent}>
          <TextInput
            multiline={true}
            style={Memostyles.Memotitle}
            blurOnSubmit={true}
            onChangeText={setTitle}
            placeholder={'Title'}
            value={title}
          ></TextInput>
          <View style={{ alignItems: 'center' }}>
            <View style={Memostyles.underbar}></View>
          </View>
          <TextInput
            multiline={true}
            style={Memostyles.Memotext}
            blurOnSubmit={true}
            onChangeText={setText}
            placeholder={'Write your memo'}
            value={text}
          ></TextInput>
        </View>
        <NormalButton text={'Save'} onPress={onPress}></NormalButton>
      </View>
    </View>
  );
}
