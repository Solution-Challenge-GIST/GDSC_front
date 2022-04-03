import { View, Text, ScrollView } from 'react-native';
import React, { useCallback } from 'react';
import DateLine from '../../../../components/DateLine/DateLine';
import AlbumCard from '../../../../components/Album/AlbumCard/AlbumCard';
import { albumStyles } from '../style';
import AlbumSeniorVoice from '../../../../components/Album/AlbumSeniorVoice/AlbumSeniorVoice';
import { useGetSeniorAlbums } from '../../../../hooks/albums/useGetSeniorAlbums';
import { useME } from '../../../../hooks/accounts/useMe';
import { useGetSeniorVoices } from '../../../../hooks/simplevoices/useGetSeniorVoices';
import { useFocusEffect } from '@react-navigation/native';
import { useRef } from 'react';
import { useScrollToTop } from '@react-navigation/native';

const weekData = {
  year: '2022',
  month: '3',
  day: '13',
  weekday: 'Sun',
};

export default function SeniorAlbum() {
  const ref = useRef(null);

  const {
    data: seniorAlbum,
    isLoading: isSeniorAlbumLoading,
    refetch: refetchSeniorAlbum,
  } = useGetSeniorAlbums();
  const { data: voice, isLoading: voiceLoading } = useGetSeniorVoices();
  const { data: me } = useME();

  useFocusEffect(
    useCallback(() => {
      refetchSeniorAlbum();
    }, []),
  );
  useScrollToTop(ref);
  if (!isSeniorAlbumLoading && !voiceLoading) {
    return (
      <View>
        <ScrollView
          ref={ref}
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
            <DateLine type="SENIOR" {...weekData} />
          </View>
          {seniorAlbum.results.map(item => {
            return (
              <View key={item.album_id} style={albumStyles.card}>
                <AlbumCard
                  id={item.album_id}
                  type={me.role}
                  emotion={item.emotion}
                  username={item.junior.name}
                  isReplied={item.is_replied}
                  uri={item.img}
                  title={item.title}
                />
              </View>
            );
          })}
          {voice.results.map(item => {
            return (
              <View key={item.simplevoice_id} style={albumStyles.voice}>
                <AlbumSeniorVoice
                  isReplied={false}
                  id={item.simplevoice_id}
                  username={item.junior.name}
                  voiceURI={item.voice}
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
