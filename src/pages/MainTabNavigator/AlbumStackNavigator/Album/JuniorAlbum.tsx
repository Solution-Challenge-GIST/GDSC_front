import { View, Text, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import DateLine from '../../../../components/DateLine/DateLine';
import AlbumCard from '../../../../components/Album/AlbumCard/AlbumCard';
import { albumStyles } from '../style';
import AlbumJuniorVoice from '../../../../components/Album/AlbumJuniorVoice/AlbumJuniorVoice';
import { useGetJuniorAlbums } from '../../../../hooks/albums/useGetJuniorAlbums';
import { useME } from '../../../../hooks/accounts/useMe';

const weekData = {
  year: '2022',
  month: '03',
  day: '13',
  weekday: 'Sun',
};
const voiceData = [
  {
    isReplied: true,
    id: 1,
    username: '김민국',
    question: '내 자식이 한 일 중에 가장 기뻤던 일은?',
  },
  {
    isReplied: false,
    id: 2,
    username: '조용환',
    question: '내 자식이 한 일 중에 가장 기뻤던 일은?',
  },
];
export default function JuniorAlbum() {
  const { data: my, isLoading: isMeLoading } = useME();
  const {
    data: juniorAlbum,
    isLoading: isJuniorAlbumLoading,
    refetch: refetchJuniorAlbum,
  } = useGetJuniorAlbums();

  useFocusEffect(
    useCallback(() => {
      refetchJuniorAlbum();
    }, []),
  );

  if (!isJuniorAlbumLoading && !isMeLoading) {
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
              <View style={albumStyles.card}>
                <AlbumCard
                  key={item.album_id}
                  id={item.album_id}
                  memo={item.memo.content}
                  type={my.role}
                  username={item.junior.name}
                  isReplied={item.is_replied}
                  uri={item.img}
                  title={item.title}
                />
              </View>
            );
          })}
          {/* {cardData.user.map(item => {
            return (
              <View style={albumStyles.card}>
                <AlbumCard
                  key={item.id}
                  memo={item.memo}
                  id={item.id}
                  type={item.type}
                  username={item.username}
                  isReplied={item.isReplied}
                  uri={item.uri}
                  title={item.title}
                />
              </View>
            );
          }) */}
          {voiceData.map(item => {
            return (
              <View style={albumStyles.voice}>
                <AlbumJuniorVoice
                  key={item.id}
                  id={item.id}
                  isReplied={item.isReplied}
                  question={item.question}
                />
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  } else {
    return <View></View>;
  }
}
