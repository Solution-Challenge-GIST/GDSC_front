import { View, Text, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import DateLine from '../../../../components/DateLine/DateLine';
import AlbumCard from '../../../../components/Album/AlbumCard/AlbumCard';
import { albumStyles } from '../style';
import AlbumJuniorVoice from '../../../../components/Album/AlbumJuniorVoice/AlbumJuniorVoice';
import { useGetJuniorAlbums } from '../../../../hooks/albums/useGetJuniorAlbums';
import { useME } from '../../../../hooks/accounts/useMe';
import { useGetJuniorVoices } from '../../../../hooks/simplevoices/useGetJuniorVoices';

const weekData = {
  year: '2022',
  month: '03',
  day: '13',
  weekday: 'Sun',
};

export default function JuniorAlbum() {
  const { data: my, isLoading: isMeLoading } = useME();
  const {
    data: juniorAlbum,
    isLoading: isJuniorAlbumLoading,
    refetch: refetchJuniorAlbum,
  } = useGetJuniorAlbums();
  const { data: voice, isLoading: voiceLoading } = useGetJuniorVoices();
  useFocusEffect(
    useCallback(() => {
      refetchJuniorAlbum();
    }, []),
  );

  if (!isJuniorAlbumLoading && !isMeLoading && !voiceLoading) {
    return (
      <View>
        <ScrollView
          bounces={true}
          style={{ marginBottom: 92 }}
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          <View style={albumStyles.title}>
            <Text style={albumStyles.titleText}>Album</Text>
          </View>
          <View style={albumStyles.dateLineSenior}>
            <DateLine type={my.role} {...weekData} />
          </View>
          {juniorAlbum.results.map(item => {
            return (
              <View key={item.album_id} style={albumStyles.card}>
                <AlbumCard
                  id={item.album_id}
                  memo={item.memo.content}
                  type={my.role}
                  emotion={item.emotion}
                  username={item.junior.name}
                  isReplied={item.is_replied}
                  uri={item.img}
                  title={item.memo.title}
                />
              </View>
            );
          })}
          {voice.results.map(item => {
            return (
              <View key={item.simplevoice_id} style={albumStyles.voice}>
                <AlbumJuniorVoice
                  id={item.simplevoice_id}
                  isReplied={false}
                  voiceURI={item.voice}
                  name={item.senior.name}
                />
              </View>
            );
          })}
          {/* {voiceData.map(item => {
            return (
              <View key={item.id} style={albumStyles.voice}>
                <AlbumJuniorVoice
                  id={item.id}
                  isReplied={item.isReplied}
                  question={item.question}
                />
              </View>
            );
          })}*/}
        </ScrollView>
      </View>
    );
  } else {
    return <View></View>;
  }
}
