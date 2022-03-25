import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { AlbumJuniorVoiceStyles } from './style';

export default function AlbumJuniorVoice({
  id,
  isReplied,
  question,
}: {
  id: number;
  isReplied: boolean;
  question: string;
}) {
  const goDetail = () => {
    console.log(`postId${id} 으로 이동`);
  };
  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumJuniorVoiceStyles.container}>
        <Text style={AlbumJuniorVoiceStyles.font}>{question}</Text>
        {isReplied ? (
          <Image
            style={AlbumJuniorVoiceStyles.replyStatus}
            source={require('../images/isReplied.png')}
          />
        ) : (
          <Image
            style={AlbumJuniorVoiceStyles.replyStatus}
            source={require('../images/needReply.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
