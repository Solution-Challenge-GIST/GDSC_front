import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  Platform,
} from 'react-native';
import React, { useState } from 'react';
import { record2Styles } from './style';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';
import RadioButton from './radioButton/RadioButton';
import NormalButton from '../../../../components/button/NormalButton';
import { Audio } from 'expo-av';
import {
  makeSimpleVoiceUri,
  useCreateSimpleVoice,
} from '../../../../hooks/simplevoices/useCreateSimpleVoice';

export default function Record2({ route }) {
  const relationInfo = route.params.relationship;
  const [recording, setRecording] = useState<Audio.Recording>();
  const [recordingStatus, setRecordingStatus] =
    useState<Audio.RecordingStatus>();
  const [recordURI, setRecordURI] = useState();
  const { mutate } = useCreateSimpleVoice();
  const onSave = async () => {
    const voiceURI = await makeSimpleVoiceUri(recordURI);
    const data = { juniorId: relationInfo.junior.junior_id, voice: voiceURI };
    mutate(data, {
      onSuccess: data => {
        console.log(data);
      },
    });
  };

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
      const URI = recording.getURI();
      setRecordURI(URI);
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
    <View>
      <View
        style={{
          alignItems: 'center',
          marginTop: getDisplayHeight(120),
          marginHorizontal: getDisplayWidth(19),
        }}
      >
        {!recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
          <>
            <Text style={record2Styles.font}>Click button to Record.</Text>
            <Image
              style={record2Styles.radioImage}
              source={require('./images/radio.png')}
            />
          </>
        )}
        {recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
          <>
            <Text style={record2Styles.font}>Now Recoding...</Text>
            <Image
              style={record2Styles.radioImageRecoding}
              source={require('./images/recodingRadio.png')}
            />
          </>
        )}
        {!recordingStatus?.isRecording && recordingStatus?.isDoneRecording && (
          <>
            {/* <Text style={record2Styles.font}>기록이 멈췄어요!</Text> */}
            <Text style={record2Styles.font}>Recorded! Want save?</Text>
            <Image
              style={record2Styles.radioImageRecoding}
              source={require('./images/recordDoneRadio.png')}
            />
          </>
        )}

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {!recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
            <View style={{ alignItems: 'center' }}>
              <RadioButton type="record" onPress={startRecording} />
              <Text style={record2Styles.buttonText}>Start Recoding</Text>
            </View>
          )}
          {recordingStatus?.isRecording && !recordingStatus?.isDoneRecording && (
            <View style={{ alignItems: 'center' }}>
              <RadioButton type="stop" onPress={stopRecording} />
              <Text style={record2Styles.buttonText}>Stop Recoding</Text>
            </View>
          )}
        </View>
        {!recordingStatus?.isRecording && recordingStatus?.isDoneRecording && (
          <View style={record2Styles.recordDoneButtonsContainer}>
            <NormalButton onPress={onSave} text="Save" />
            <NormalButton onPress={reRecord} text="Delete and re-recording" />
            <NormalButton onPress={playRecord} text="Play record" />
          </View>
        )}
      </View>
    </View>
  );
}
