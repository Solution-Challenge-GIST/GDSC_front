import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileInput from '../../../../components/input/ProfileInput';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { profileStyles } from './style';
import { getDisplayHeight } from '../../../../utility';
import NormalText from '../../../../components/CustomText/NormalText';

const data = {
  user: {
    name: '김갑수',
    age: '67살',
    location: '인천 광역시 ',
    sick: '당뇨병',
    tel: '010-2578-5384',
    significant: '없습니다',
  },
};
export default function Profile() {
  const [fix, setFix] = useState(true);
  const [age, setAge] = useState(`${data.user.age}`);
  const [location, setLocation] = useState(`${data.user.location}`);
  const [sick, setSick] = useState(`${data.user.sick}`);
  const [tel, setTel] = useState(`${data.user.tel}`);
  const [significant, setSignificant] = useState(`${data.user.significant}`);

  const onPress = () => {
    setFix(!fix);
  };

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} bounces={true}>
        <View style={{ height: getDisplayHeight(1350) }}>
          <View style={profileStyles.imageComponent}>
            <Text style={profileStyles.info}>My Profile</Text>
            <View style={profileStyles.align}>
              <View style={profileStyles.image}></View>
              <View style={profileStyles.profileName}>
                <Text style={profileStyles.profileName_big}>
                  {data.user.name}
                </Text>
                {/* <Text style={profileStyles.profileName_small}>님</Text> */}
              </View>
            </View>
          </View>
          {!fix && (
            <>
              <View style={profileStyles.infoComponent}>
                <ProfileInput
                  name={'Age'}
                  value={age}
                  onChangeText={setAge}
                ></ProfileInput>
                <ProfileInput
                  name={'Location'}
                  value={location}
                  onChangeText={setLocation}
                ></ProfileInput>
                <ProfileInput
                  name={'Chronic Illness'}
                  value={sick}
                  onChangeText={setSick}
                ></ProfileInput>
                <ProfileInput
                  name={'Emergency Call'}
                  value={tel}
                  onChangeText={setTel}
                ></ProfileInput>
                <ProfileInput
                  name={'Remarks'}
                  value={significant}
                  onChangeText={setSignificant}
                ></ProfileInput>
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={onPress}
                  style={profileStyles.fixbutton}
                >
                  <Image
                    style={profileStyles.fixImage}
                    source={require('../profileImages/settings.png')}
                  />
                  <Text style={profileStyles.info}>Save</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
          {fix && (
            <>
              <View style={profileStyles.infoComponent}>
                <NormalText name={'Age'} value={age} />
                <NormalText name={'Location'} value={location} />
                <NormalText name={'Chronic Illness'} value={sick} />
                <NormalText name={'Emergency Call'} value={tel} />
                <NormalText name={'Remarks'} value={significant} />
              </View>
              <View style={{ alignItems: 'center' }}>
                <TouchableOpacity
                  onPress={onPress}
                  style={profileStyles.fixbutton}
                >
                  <Image
                    style={profileStyles.fixImage}
                    source={require('../profileImages/settings.png')}
                  />
                  <Text style={profileStyles.info}>Edit</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
