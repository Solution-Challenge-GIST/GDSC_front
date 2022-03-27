import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import QuestionBox from '../../../../components/QuestionBox/QuestionBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainAlbumCard from '../../../../components/Album/AlbumCard/MainAlbumCard';
import { HomeStyles } from './style';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';
import { useNavigation } from '@react-navigation/native';
import { useME } from '../../../../hooks/useMe';


const cardData = [
  {
    id: 10,
    username: '김민국',
    uri: 'https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc=',
    title: '멋진 우리 할아버지',
    memo: '메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구...',
    isReplied: false,
    month: '03',
    day: '13',
    date: 'Fri',
  },
  {
    id: 11,
    username: '김민국',
    uri: 'https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc=',
    title: '멋진 우리 할아버지',
    memo: '메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구...',
    isReplied: false,
    month: '03',
    day: '13',
    date: 'Fri',
  },
];
export default function Home() {
  const navigation = useNavigation();
  const { data, isLoading } = useME();
  console.log(data);
  const onPress = () => {
    if (data.role === 'SENIOR') {
      navigation.navigate('Record1');
    } else {
      navigation.navigate('AddImage');
    }
  };
  return (
    <ScrollView style={{ marginBottom: 92 }}>
      <View style={HomeStyles.MainContainer}>
        <Text style={HomeStyles.font}>There's a question!</Text>
      </View>
      <View
        style={{ alignItems: 'center', marginBottom: getDisplayHeight(24) }}
      >
        <QuestionBox payload="What was the happiest thing your child did?"></QuestionBox>
      </View>

      <View style={HomeStyles.UnanswerContainer}>
        <Text style={HomeStyles.font}>Unanswered</Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        {cardData.map(item => {
          return (
            <View style={{ marginBottom: getDisplayHeight(30) }}>
              <MainAlbumCard
                key={item.id}
                id={item.id}
                username={item.username}
                uri={item.uri}
                memo={item.memo}
                title={item.title}
                isReplied={item.isReplied}
                month={item.month}
                day={item.day}
                date={item.date}
              />
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
