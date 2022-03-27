import React from 'react';
import { ScrollView, View } from 'react-native';

import MainAlbumCard from '../../../components/Album/AlbumCard/MainAlbumCard';
import AudioButton from '../../../components/button/AudioButton';
import VoiceReply from '../../../components/VoiceReply/VoiceReply';
import { DAY } from '../../../constants/day';
import { useGetAlbumByAlbumId } from '../../../hooks/albums/useGetAlbumbyAlbumId';
import { useGetRepliesByAlbumId } from '../../../hooks/albums/useGetRepliesByAlbumId';
import { getDisplayHeight } from '../../../utility';
import { DetailStyles } from './style';

export default function Detail({ route }) {
  const albumId = route.params.albumId;
  const { data: album, isLoading: albumLoading } =
    useGetAlbumByAlbumId(albumId);
  const { data: reply, isLoading: replyLoading } =
    useGetRepliesByAlbumId(albumId);

  if (!replyLoading && !albumLoading) {
    const {
      album_id,
      junior,
      img,
      is_replied,
      created_date: albumCreateDate,
      day,
    } = album;
    const [AlbumYear, AlbumMonth, AlbumDate] = albumCreateDate.split('-');
    return (
      <ScrollView style={{ marginBottom: 92 }}>
        <View style={DetailStyles.container}>
          <MainAlbumCard
            key={album_id}
            id={album_id}
            username={junior.name}
            uri={img}
            isReplied={is_replied}
            day={DAY[day]}
            month={AlbumMonth}
            date={AlbumDate}
          />

          {reply.results.map(item => {
            const { replier, created_date, day, voice } = item;
            const [year, month, date] = created_date.split('-');
            return (
              <View style={DetailStyles.voiceContainer}>
                <VoiceReply
                  username={replier.name}
                  voice={voice}
                  day={DAY[day]}
                  date={date}
                  month={month}
                />
              </View>
            );
          })}
        </View>
        <View style={{ marginTop: getDisplayHeight(20) }}>
          <AudioButton />
        </View>
      </ScrollView>
    );
  } else {
    return <View></View>;
  }
}
