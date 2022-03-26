import { View, Text } from 'react-native';
import React, { useState } from 'react';
import NormalButton from '../../../../components/button/NormalButton';
import AddImageButton from '../../../../components/AddButton/AddImageButton';
import AddVoiceButton from '../../../../components/AddButton/AddVoiceButton';
import { AddImageStyles } from './style';
import { getDisplayHeight } from '../../../../utility';

export default function AddImage() {
  const [recordURI, setRecordURI] = useState();

  const getRecordURI = recordURI => {
    setRecordURI(recordURI);
  };
  console.log('@@@@@@@@@@@@@@@@@@@', recordURI);
  return (
    <View style={AddImageStyles.container}>
      <Text style={AddImageStyles.font}>Picture</Text>
      <View style={AddImageStyles.buttonGap}>
        <AddImageButton />
      </View>
      <Text style={AddImageStyles.font}>Voice</Text>
      <View style={AddImageStyles.buttonGap}>
        <AddVoiceButton getRecordURI={getRecordURI} />
      </View>
      <View style={{ marginTop: getDisplayHeight(30) }}>
        <NormalButton
          text="Save"
          onPress={() => console.log('save complete')}
          disable={false}
        />
      </View>
    </View>
  );
}