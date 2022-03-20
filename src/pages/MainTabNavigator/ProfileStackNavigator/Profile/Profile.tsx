import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileInput from '../../../../components/input/ProfileInput';
import { ScrollView } from 'react-native-gesture-handler';
import { styles } from './style';

export default function Profile() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.infoComponent}>
          <Text style={styles.info}>내 정보</Text>
          <View style={styles.align}>
            <View style={styles.image}></View>
            <View style={styles.profileName}>
              <Text style={styles.profileName_big}>김갑수</Text>
              <Text style={styles.profileName_small}>님</Text>
            </View>
          </View>
        </View>
        <View>
          <ProfileInput name={'나이'}></ProfileInput>
          <ProfileInput name={'사는 곳'}></ProfileInput>
          <ProfileInput name={'지병'}></ProfileInput>
          <ProfileInput name={'비상 연락망'}></ProfileInput>
          <ProfileInput name={'특이사항'}></ProfileInput>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
