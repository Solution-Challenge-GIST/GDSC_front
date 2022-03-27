import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import DateLine from '../../../../components/DateLine/DateLine';
import AlbumCard from '../../../../components/Album/AlbumCard/AlbumCard';
import { FlatList } from 'react-native-gesture-handler';
import { albumStyles } from '../style';
import AlbumSeniorVoice from '../../../../components/Album/AlbumSeniorVoice/AlbumSeniorVoice';
import { useGetSeniorAlbums } from '../../../../hooks/albums/useGetSeniorAlbums';
import { useME } from '../../../../hooks/accounts/useMe';

const Typedata = {
  type: 'senior',
};
const weekData = {
  year: '2022',
  month: '3',
  day: '13',
  weekday: '일요일',
};
const cardData = {
  user: [
    {
      id: 10,
      type: 'senior',
      username: '김민국',
      uri: 'https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc=',
      title: '멋진 우리 할아버지',
      memo: '메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구...',
      isReplied: false,
    },
    {
      id: 11,
      type: 'senior',
      username: '조용환',
      uri: 'https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc=',
      title: '멋진 우리 할아버지',
      memo: '메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구...',
      isReplied: true,
    },
    {
      id: 12,
      type: 'senior',
      username: '이주찬',
      uri: 'https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc=',
      title: '멋진 우리 할아버지',
      memo: '메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구...',
      isReplied: false,
    },
  ],
};
const voiceData = [
  {
    isReplied: true,
    id: 1,
    username: '김민국',
  },
  {
    isReplied: false,
    id: 2,
    username: '조용환',
  },
];
export default function SeniorAlbum() {
  const { data, isLoading } = useGetSeniorAlbums();
  const { data: Me } = useME();
  console.log(Me);
  if (!isLoading) {
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
          {data.results.map(item => {
            return (
              <View style={albumStyles.card}>
                <AlbumCard
                  key={item.album_id}
                  id={item.album_id}
                  type={Me.role}
                  username={item.junior.name}
                  isReplied={item.is_replied}
                  uri={item.img}
                  title={item.title}
                />
              </View>
            );
          })}
          {voiceData.map(item => {
            return (
              <View style={albumStyles.voice}>
                <AlbumSeniorVoice
                  key={item.id}
                  isReplied={item.isReplied}
                  id={item.id}
                  username={item.username}
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
