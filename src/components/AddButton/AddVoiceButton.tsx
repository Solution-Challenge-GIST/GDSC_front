import { View, Text, TouchableOpacity, Image, Button } from 'react-native';
import React, { useState } from 'react';
import { addImageButtonStyles } from './styles';
import { Audio } from 'expo-av';
import NormalButton from '../button/NormalButton';

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
      //   console.log(`Recorded URI: ${recording.getURI()}`);
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
      <TouchableOpacity onPress={startRecording}>
        <Image
          style={addImageButtonStyles.plus}
          source={require('./images/record.png')}
        />
        <Text style={addImageButtonStyles.font}>Start Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={stopRecording}>
        <Image
          style={addImageButtonStyles.plus}
          source={require('./images/stop.png')}
        />
        <Text style={addImageButtonStyles.font}>Stop Recording</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={playRecord}>
        <Text style={addImageButtonStyles.font}>Replay</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={reRecord}>
        <Text style={addImageButtonStyles.font}>reRecord</Text>
      </TouchableOpacity>
      <View>
        <Text style={{ fontSize: 15 }}>
          Can record: {recordingStatus?.canRecord ? 'Yes' : 'No'}
        </Text>
        <Text>Is recording: {recordingStatus?.isRecording ? 'Yes' : 'No'}</Text>
        <Text>
          Is done recording: {recordingStatus?.isDoneRecording ? 'Yes' : 'No'}
        </Text>
        <Text>Recording time: {recordingStatus?.durationMillis}</Text>
      </View>
    </View>
  );
}
//     <View style={addImageButtonStyles.container}>
//       {recording && !recordingStatus ? (
// <TouchableOpacity onPress={stopRecording}>
//   <Image
//     style={addImageButtonStyles.plus}
//     source={require('./images/stop.png')}
//   />
//   <Text style={addImageButtonStyles.font}>Stop Recording</Text>
// </TouchableOpacity>
//       ) : (
// <TouchableOpacity onPress={startRecording}>
//   <Image
//     style={addImageButtonStyles.plus}
//     source={require('./images/record.png')}
//   />
//   <Text style={addImageButtonStyles.font}>Start Recording</Text>
// </TouchableOpacity>
//       )}
//       {recordingStatus && (
//         <>
//           <TouchableOpacity onPress={playRecord}>
//             <Text style={addImageButtonStyles.font}>Record Success!</Text>
//             <Text style={addImageButtonStyles.smallfont}>
//               Press to replay record
//             </Text>
//           </TouchableOpacity>
//           <NormalButton text="Re-record" onPress={reRecord} />
//         </>
//       )}
//     </View>
//   );
