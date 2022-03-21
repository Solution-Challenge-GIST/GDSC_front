import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { AlbumJuniorVoiceStyles } from './style';

export default function AlbumJuniorVoice({ id }: { id: number }) {
  const goDetail = () => {
    console.log(`postId${id} 으로 이동`);
  };
  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumJuniorVoiceStyles.container}>
        <Text>음성기록</Text>
        <Text>
          메모 내용 어쩌구 저쩌구 이런 일이 있었구 저런 일이 있었구 ...
        </Text>
      </View>
    </TouchableOpacity>
  );
}
