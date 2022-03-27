import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { voiceReplyStyles } from './style';
import Calendar from '../calendar/Calendar';
import { getDisplayWidth } from '../../utility';

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
  const playVoice = () => {
    console.log('voice 파일이 실행됨');
  };
  return (
    <TouchableOpacity onPress={playVoice}>
      <View style={voiceReplyStyles.container}>
        <Calendar month={month} day={day} date={date} fontSize="big" />
        <View style={{ alignItems: 'center', marginLeft: getDisplayWidth(86) }}>
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
