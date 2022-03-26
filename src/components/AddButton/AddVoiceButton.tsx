import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import React, { useState } from 'react';
import { addImageButtonStyles } from './styles';
import { Audio } from 'expo-av';

interface Props {
  getRecordURI: Function;
}

export default function AddVoiceButton(props: Props) {
  const { getRecordURI } = props;
  const [recording, setRecording] = useState<Audio.Recording>();
  const [recordingStatus, setRecordingStatus] =
    useState<Audio.RecordingStatus>();

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
      getRecordURI(recording.getURI());
    } catch (error) {
      // Do nothing -- we are already unloaded.
    }
  }

  async function playRecord() {
    const { sound } = await recording.createNewLoadedSoundAsync();
    sound.replayAsync();
  }

  async function reRecord() {
    setRecording(undefined);
    setRecordingStatus(undefined);
  }
  return (
    <View style={addImageButtonStyles.container}>
      {!recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
        <TouchableOpacity
          style={addImageButtonStyles.recordingBtn}
          onPress={startRecording}
        >
          <Image
            style={addImageButtonStyles.plus}
            source={require('./images/record.png')}
          />
          <Text style={addImageButtonStyles.font}>Start Recording</Text>
        </TouchableOpacity>
      )}
      {recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
        <TouchableOpacity
          style={addImageButtonStyles.recordingBtn}
          onPress={stopRecording}
        >
          <Image
            style={addImageButtonStyles.plus}
            source={require('./images/stop.png')}
          />
          <Text style={addImageButtonStyles.font}>Stop Recording</Text>
        </TouchableOpacity>
      )}
      {!recordingStatus?.isRecording && recordingStatus?.isDoneRecording && (
        <>
          <TouchableOpacity onPress={playRecord}>
            <Text style={addImageButtonStyles.font}>Press to replay</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={reRecord}>
            <Text style={addImageButtonStyles.font}>Press to re-record</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
