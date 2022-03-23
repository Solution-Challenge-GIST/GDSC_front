import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AlbumSeniorVoiceStyles } from './style';
import { getDisplayWidth } from '../../../utility';

interface Props {
  id: number;
  username: string;
  isReplied: boolean;
}
export default function AlbumSeniorVoice(props: Props) {
  const { id, username, isReplied } = props;

  const goDetail = () => {
    console.log(`postId ${id}로 이동함`);
  };

  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumSeniorVoiceStyles.container}>
        <View style={{ flexDirection: 'row', marginLeft: getDisplayWidth(9) }}>
          <Image
            style={AlbumSeniorVoiceStyles.speaker}
            source={require('./images/speaker.png')}
          />
          <View style={{ marginLeft: getDisplayWidth(16) }}>
            <Text style={AlbumSeniorVoiceStyles.font}>{`${username}님이`}</Text>
            <Text style={AlbumSeniorVoiceStyles.font}>보냈습니다.</Text>
          </View>
        </View>
        {isReplied ? (
          <Image
            style={AlbumSeniorVoiceStyles.replyStatus}
            source={require('../images/isReplied.png')}
          />
        ) : (
          <Image
            style={AlbumSeniorVoiceStyles.replyStatus}
            source={require('../images/needReply.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
