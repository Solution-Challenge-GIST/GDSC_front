import { Audio } from 'expo-av';
import React, { useState } from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { queryClient } from '../../../App';
import {
  makeReplyVoiceUri,
  useCreateRepliesMutation,
} from '../../hooks/albums/useCreateRepliesMutation';
import { styles } from './style';

export default function AudioButton({ albumId }: { albumId: number }) {
  const [recording, setRecording] = useState<Audio.Recording>();
  const [recordingStatus, setRecordingStatus] =
    useState<Audio.RecordingStatus>();
  const { mutate } = useCreateRepliesMutation();

  async function startRecording() {
    try {
      await Audio.requestPermissionsAsync();
      await Audio.setAudioModeAsync({
        playsInSilentModeIOS: true,
        allowsRecordingIOS: true,
      }); // <= important for IOS

      const newRrecording = new Audio.Recording();
      setRecording(newRrecording);

      await newRrecording.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_LOW_QUALITY,
      );

      newRrecording.setOnRecordingStatusUpdate(
        (status: Audio.RecordingStatus) => setRecordingStatus(status),
      );

      await newRrecording.startAsync();
    } catch (err) {
      console.error('Failed to start recording', err);
    }
  }

  async function stopRecording() {
    if (!recording) {
      console.log('You are not recording.');
      return;
    }

    try {
      await recording.stopAndUnloadAsync();
      const voice = await makeReplyVoiceUri(recording.getURI(), albumId);

      const data = { albumId, voice };
      mutate(data, {
        onSuccess: data => {
          console.log(data);
          queryClient.invalidateQueries('useGetAlbumByAlbumId');
          queryClient.invalidateQueries('useGetRepliesByAlbumId');
        },
      });
      reRecord();
      //axios하니 보내고
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
  }

  async function reRecord() {
    setRecording(undefined);
    setRecordingStatus(undefined);
  }

  return (
    <View style={{ alignItems: 'center' }}>
      {!recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
        <TouchableOpacity onPress={startRecording}>
          <Image
            style={styles.AudioButton}
            source={require('../AddButton/images/record.png')}
          />
        </TouchableOpacity>
      )}
      {recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
        <TouchableOpacity onPress={stopRecording}>
          <Image
            style={styles.AudioButton}
            source={require('../AddButton/images/stop.png')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}
