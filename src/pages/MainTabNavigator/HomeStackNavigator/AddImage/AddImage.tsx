import { View, Text } from 'react-native';
import React, { useState } from 'react';
import NormalButton from '../../../../components/button/NormalButton';
import AddImageButton from '../../../../components/AddButton/AddImageButton';
import AddVoiceButton from '../../../../components/AddButton/AddVoiceButton';
import { AddImageStyles } from './style';
import {
  makeImageUri,
  makeVoiceUri,
  useCreateAlbum,
} from '../../../../hooks/albums/useCreateAlbum';

export default function AddImage() {
  const [imageURI, setImageURI] = useState();
  const [recordURI, setRecordURI] = useState();
  const { mutate } = useCreateAlbum();

  const getImageURI = imageURI => {
    setImageURI(imageURI);
  };
  const getRecordURI = recordURI => {
    setRecordURI(recordURI);
  };
  const createAlbum = async () => {
    const serverImageUri = await makeImageUri(imageURI);
    const serverVoiceUri = await makeVoiceUri(recordURI);
    const data = {
      seniorId: 1,
      imageUri: serverImageUri,
      voiceUri: serverVoiceUri,
    };
    mutate(data, {
      onSuccess: data => {
        console.log(data);
      },
    });
  };
  return (
    <View style={AddImageStyles.container}>
      <View style={AddImageStyles.pictureText}>
        <Text style={AddImageStyles.font}>Picture</Text>
      </View>

      <View style={AddImageStyles.buttonGap}>
        <AddImageButton getImageURI={getImageURI} />
      </View>
      <Text style={AddImageStyles.font}>Voice</Text>
      <View style={AddImageStyles.buttonGap}>
        <AddVoiceButton getRecordURI={getRecordURI} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <NormalButton text="Save" onPress={createAlbum} disable={false} />
      </View>
    </View>
  );
}
