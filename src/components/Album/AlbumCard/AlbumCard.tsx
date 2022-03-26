import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { AlbumCardInfo, AlbumCardInfoWithUserType } from '../../../type';
import { AlbumCardStyles } from './style';
import { getDisplayWidth } from '../../../utility';

export default function AlbumCard(props: AlbumCardInfoWithUserType) {
  const { id, username, uri, title, memo, isReplied, type } = props;

  const goDetail = () => {
    console.log(`postid${id}로 이동`);
  };

  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumCardStyles.container}>
        <Image source={{ uri }} style={AlbumCardStyles.cardImage} />
        <View style={{ marginHorizontal: getDisplayWidth(7) }}>
          {type === 'junior' ? (
            <>
              <Text style={AlbumCardStyles.cardTitle}>{title}</Text>
              <Text style={AlbumCardStyles.cardMemo}>{memo}</Text>
            </>
          ) : (
            <>
              <Text style={AlbumCardStyles.seniorUserInfo}>Sent by</Text>
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
      </View>
    </TouchableOpacity>
  );
}
