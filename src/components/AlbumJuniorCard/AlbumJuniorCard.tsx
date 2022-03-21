import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { getDisplayWidth } from '../../utility';
import { AlbumJuniorCardStyles } from './style';

interface JuniorCardInfo {
  id: number;
  uri: string;
  title: string;
  memo: string;
  isReplied: boolean;
}

export default function AlbumJuniorCard(props: JuniorCardInfo) {
  const { id, uri, title, memo, isReplied } = props;

  const goDetail = () => {
    console.log(`postid${id}로 이동`);
  };

  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumJuniorCardStyles.container}>
        <Image source={{ uri }} style={AlbumJuniorCardStyles.cardImage} />
        <View style={{ marginHorizontal: getDisplayWidth(7) }}>
          <Text style={AlbumJuniorCardStyles.cardTitle}>{title}</Text>
          <Text style={AlbumJuniorCardStyles.cardMemo}>{memo}</Text>
        </View>
        {isReplied ? (
          <Image
            style={AlbumJuniorCardStyles.replyStatus}
            source={require('./images/isReplied.png')}
          />
        ) : (
          <Image
            style={AlbumJuniorCardStyles.replyStatus}
            source={require('./images/needReply.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
