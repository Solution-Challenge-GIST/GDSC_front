import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileInput from '../../../../components/input/ProfileInput';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { profileStyles } from './style';
import { getDisplayHeight } from '../../../../utility';
import NormalText from '../../../../components/CustomText/NormalText';
import { useME } from '../../../../hooks/accounts/useMe';
import { useSeniorProfileUpdateMutation } from '../../../../hooks/seniors/useSeniorProfileUpdateMutation';
import { useRef } from 'react';
import { useScrollToTop } from '@react-navigation/native';

export default function Profile() {
  const ref = useRef(null);
  useScrollToTop(ref);
  const { data, isLoading } = useME();
  if (data.role === 'SENIOR' && !isLoading) {
    const { mutate, isLoading: SeniorProfileLoading } =
      useSeniorProfileUpdateMutation();
    const [fix, setFix] = useState(false);
    const [age, setAge] = useState(`${data.senior.age}`);
    const [address, setAddress] = useState(`${data.senior.address}`);
    const [illness, setIllness] = useState(`${data.senior.illness}`);
    const [phone_number, setPhone_number] = useState(
      `${data.senior.phone_number}`,
    );
    const [remarks, setRemarks] = useState(`${data.senior.remarks}`);
    if (illness === 'null') {
      setIllness('없음');
    }
    if (remarks === 'null') {
      setRemarks('없음');
    }
    const onPressFix = async () => {
      mutate(
        {
          profile_img: data.senior.profile_img,
          name: data.senior.name,
          age: age,
          address: address,
          illness: illness,
          phone_number: phone_number,
          remarks: remarks,
          seniorId: data.senior.senior_id,
        },
        {
          onSuccess: () => {
            setFix(!fix);
          },
        },
      );
    };

    const onPressNotFix = () => {
      setFix(!fix);
    };
    if (!SeniorProfileLoading) {
      return (
        <SafeAreaView>
          <ScrollView
            ref={ref}
            contentContainerStyle={{ flexGrow: 1 }}
            bounces={true}
          >
            <View style={{ height: getDisplayHeight(1400) }}>
              <View style={profileStyles.imageComponent}>
                <Text style={profileStyles.info}>My Profile</Text>
                <View style={profileStyles.align}>
                  <Image
                    style={profileStyles.image}
                    source={{ uri: data.senior.profile_img }}
                  />
                  <View style={profileStyles.profileName}>
                    <Text style={profileStyles.profileName_big}>
                      {data.senior.name}
                    </Text>
                  </View>
                </View>
              </View>
              {fix && (
                <>
                  <View style={profileStyles.infoComponent}>
                    <ProfileInput
                      name={'Age'}
                      value={age}
                      onChangeText={setAge}
                    ></ProfileInput>
                    <ProfileInput
                      name={'Address'}
                      value={address}
                      onChangeText={setAddress}
                    ></ProfileInput>
                    <ProfileInput
                      name={'Chronic Illness'}
                      value={illness}
                      onChangeText={setIllness}
                    ></ProfileInput>
                    <ProfileInput
                      name={'Emergency Call'}
                      value={phone_number}
                      onChangeText={setPhone_number}
                    ></ProfileInput>
                    <ProfileInput
                      name={'Remarks'}
                      value={remarks}
                      onChangeText={setRemarks}
                    ></ProfileInput>
                    <TouchableOpacity
                      onPress={onPressFix}
                      style={profileStyles.fixbutton}
                    >
                      <Image
                        style={profileStyles.fixImage}
                        source={require('../profileImages/settings.png')}
                      />
                      <Text style={profileStyles.info}> Save</Text>
                    </TouchableOpacity>
                  </View>
                </>
              )}
              {!fix && (
                <View style={profileStyles.infoComponent}>
                  <NormalText name={'Age'} value={age} />
                  <NormalText name={'Address'} value={address} />
                  <NormalText name={'Chronic Illness'} value={illness} />
                  <NormalText name={'Emergency Call'} value={phone_number} />
                  <NormalText name={'Remarks'} value={remarks} />
                  <TouchableOpacity
                    onPress={onPressNotFix}
                    style={profileStyles.fixbutton}
                  >
                    <Image
                      style={profileStyles.fixImage}
                      source={require('../profileImages/settings.png')}
                    />
                    <Text style={profileStyles.info}> Edit</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </ScrollView>
        </SafeAreaView>
      );
    } else {
      return <View></View>;
    }
  } else {
    return <View></View>;
  }
}
