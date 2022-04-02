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
  emotion: 'HAPPY' | 'SOSO' | 'SAD' | 'ANGRY';
}

const emotions = {
  HAPPY: '😄',
  SOSO: '🙂',
  SAD: '😢',
  ANGRY: '😠',
};

export default function VoiceReply(props: Props) {
  const { username, voice, month, day, date, emotion } = props;
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
          <Text style={voiceReplyStyles.username}>
            {emotions[emotion]}
            {username}
          </Text>
          <Image
            style={voiceReplyStyles.button}
            source={require('./images/play.png')}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
