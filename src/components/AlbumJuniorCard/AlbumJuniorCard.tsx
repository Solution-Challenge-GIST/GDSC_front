import { View, Text, Image } from 'react-native';
import React from 'react';
import { getDisplayWidth } from '../../utility';
import { AlbumJuniorCardStyles } from './style';

interface JuniorCardInfo {
  uri: string;
  title: string;
  memo: string;
  isReplied: boolean;
}

export default function AlbumJuniorCard(props: JuniorCardInfo) {
  const { uri, title, memo, isReplied } = props;
  return (
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
  );
}
