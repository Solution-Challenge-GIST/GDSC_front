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

const weekData = {
  year: '2022',
  month: '3',
  day: '13',
  weekday: 'Sun',
};

export default function SeniorAlbum() {
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

  if (!isSeniorAlbumLoading && !voiceLoading) {
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
            <DateLine type="SENIOR" {...weekData} />
          </View>
          {seniorAlbum.results.map(item => {
            return (
              <View style={albumStyles.card}>
                <AlbumCard
                  key={item.album_id}
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
              <View style={albumStyles.voice}>
                <AlbumSeniorVoice
                  key={item.simplevoice_id}
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
