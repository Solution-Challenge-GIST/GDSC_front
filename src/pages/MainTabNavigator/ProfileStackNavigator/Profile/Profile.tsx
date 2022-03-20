import { View, Text, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileInput from '../../../../components/input/ProfileInput';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './style';
import NormalButton from '../../../../components/button/NormalButton';

export default function Profile() {
  const onPress = () => {
    console.log('hi');
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.imageComponent}>
          <Text style={styles.info}>내 정보</Text>
          <View style={styles.align}>
            <View style={styles.image}></View>
            <View style={styles.profileName}>
              <Text style={styles.profileName_big}>김갑수</Text>
              <Text style={styles.profileName_small}>님</Text>
            </View>
          </View>
        </View>
        <View style={styles.infoComponent}>
          <ProfileInput name={'나이'}></ProfileInput>
          <ProfileInput name={'사는 곳'}></ProfileInput>
          <ProfileInput name={'지병'}></ProfileInput>
          <ProfileInput name={'비상 연락망'}></ProfileInput>
          <ProfileInput name={'특이사항'}></ProfileInput>
        </View>
        <View></View>
        <Image source={require('../settings.png')}></Image>
        <NormalButton text={'수정하기'} onPress={onPress} />
      </ScrollView>
    </SafeAreaView>
  );
}
