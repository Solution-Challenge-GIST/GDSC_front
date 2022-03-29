import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AlbumCardInfoWithUserType } from '../../../type';
import { AlbumCardStyles } from './style';
import { getDisplayWidth } from '../../../utility';
import { useNavigation } from '@react-navigation/native';
import { emotions } from './MainAlbumCard';

export default function AlbumCard(props: AlbumCardInfoWithUserType) {
  const { id, username, uri, title, memo, isReplied, type, emotion } = props;
  const navigation = useNavigation();
  const goDetail = () => {
    navigation.navigate('Detail', {
      albumId: id,
    });
  };

  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumCardStyles.container}>
        <Image source={{ uri }} style={AlbumCardStyles.cardImage} />
        <View style={{ marginHorizontal: getDisplayWidth(7) }}>
          {type === 'JUNIOR' ? (
            <>
              <Text style={AlbumCardStyles.cardTitle}>{title}</Text>
              <Text style={AlbumCardStyles.cardMemo}>{memo}</Text>
            </>
          ) : (
            <>
              <Text style={AlbumCardStyles.seniorUserInfo}>From</Text>
              <Text style={AlbumCardStyles.seniorUserInfo}>{username}</Text>
            </>
          )}
        </View>
        {isReplied ? (
          <Image
            style={AlbumCardStyles.replyStatus}
            source={require('../images/isReplied.png')}
          />
        ) : (
          <Image
            style={AlbumCardStyles.replyStatus}
            source={require('../images/needReply.png')}
          />
        )}
        <Image
          style={AlbumCardStyles.albumeEmotion}
          source={emotions[emotion]}
        />
      </View>
    </TouchableOpacity>
  );
}
