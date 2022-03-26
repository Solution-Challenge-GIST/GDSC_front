import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import DateLine from '../../../../components/DateLine/DateLine';
import AlbumCard from '../../../../components/Album/AlbumCard/AlbumCard';
import { FlatList } from 'react-native-gesture-handler';
import { albumStyles } from '../style';
import AlbumSeniorVoice from '../../../../components/Album/AlbumSeniorVoice/AlbumSeniorVoice';
import AlbumJuniorVoice from '../../../../components/Album/AlbumJuniorVoice/AlbumJuniorVoice';

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
      type: 'junior',
      username: '김민국',
      uri: 'https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc=',
      title: '멋진 우리 할아버지',
      memo: '메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구...',
      isReplied: false,
    },
    {
      id: 11,
      type: 'junior',
      username: '조용환',
      uri: 'https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc=',
      title: '멋진 우리 할아버지',
      memo: '메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구...',
      isReplied: true,
    },
    {
      id: 12,
      type: 'junior',
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
          <DateLine type="senior" {...weekData} />
        </View>
        {cardData.user.map(item => {
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
        })}
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
}
