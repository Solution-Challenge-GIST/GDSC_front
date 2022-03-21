import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileInput from '../../../../components/input/ProfileInput';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { profileStyles } from './style';

export default function Profile() {
  const onPress = () => {
    console.log('hi');
  };
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={true}>
        <View style={{ flex: 1 }}>
          <View style={profileStyles.imageComponent}>
            <Text style={profileStyles.info}>내 정보</Text>
            <View style={profileStyles.align}>
              <View style={profileStyles.image}></View>
              <View style={profileStyles.profileName}>
                <Text style={profileStyles.profileName_big}>김갑수</Text>
                <Text style={profileStyles.profileName_small}>님</Text>
              </View>
            </View>
          </View>
          <View style={profileStyles.infoComponent}>
            <ProfileInput name={'나이'}></ProfileInput>
            <ProfileInput name={'사는 곳'}></ProfileInput>
            <ProfileInput name={'지병'}></ProfileInput>
            <ProfileInput name={'비상 연락망'}></ProfileInput>
            <ProfileInput name={'특이사항'}></ProfileInput>
          </View>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity onPress={onPress} style={profileStyles.fixbutton}>
              <Image
                style={profileStyles.fixImage}
                source={require('../settings.png')}
              />
              <Text style={profileStyles.info}>수정하기</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
