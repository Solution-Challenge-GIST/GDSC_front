import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { voiceReplyStyles } from './style';
import Calendar from '../calendar/Calendar';
import { getDisplayWidth } from '../../utility';
import { Audio } from 'expo-av';
interface Props {
  username: string;
  voice: string;
  month: string;
  day: string;
  date: string;
}

// const date = {
//   month: '03',
//   date: '26',
//   day: 'Sat',
// };

export default function VoiceReply(props: Props) {
  const { username, voice, month, day, date } = props;
  const [sound, setSound] = useState();
  const playVoice = () => {
    playSound();
  };
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({ uri: voice });
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity onPress={playVoice}>
      <View style={voiceReplyStyles.container}>
        <View style={voiceReplyStyles.calendar}>
          <Calendar month={month} day={day} date={date} fontSize="big" />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={voiceReplyStyles.username}>{username}</Text>
          <Image
            style={voiceReplyStyles.button}
            source={require('./images/play.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
