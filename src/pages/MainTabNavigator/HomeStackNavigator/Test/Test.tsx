import { View, Text } from 'react-native';
import React from 'react';
import NormalButton from '../../../../components/button/NormalButton';
import Relativebutton from '../../../../components/button/RelativeButton';
import Normalinput from '../../../../components/input/NormalInputs';
import QuestionBox from '../../../../components/QuestionBox/QuestionBox';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateLine from '../../../../components/DateLine/DateLine';
import AddImageButton from '../../../../components/AddButton/AddImageButton';
import AddVoiceButton from '../../../../components/AddButton/AddVoiceButton';

export default function Test() {
  const weekData = {
    year: '2022',
    month: '3',
    day: '13',
    weekday: '일요일',
  };

  return (
    <SafeAreaView>
      {/* <NormalButton text={'다음으로'}></NormalButton>
      <Relativebutton name={'용환'} relative={'you'}></Relativebutton> */}
      <DateLine type="junior" {...weekData} />
      <DateLine type="senior" {...weekData} />
      <AddImageButton />
      <AddVoiceButton />
      {/* <AlbumJuniorCard
        id={10}
        uri="https://media.istockphoto.com/videos/family-sitting-on-sofa-at-home-eating-popcorn-and-watching-movie-video-id1153425623?b=1&k=6&m=1153425623&s=640x640&h=j79ksgz6Q_JFCyzPjG7VLGC8dARlbb3DLrVWCjQVvrc="
        title="멋진 우리 할아버지"
        memo="메모 내용 어쩌구저쩌구 이런 일이 있었구 저런 일이 있었구..."
        isReplied={true}
      /> */}
      {/* <AlbumJuniorVoice
        id={item.id}
        isReplied={item.isReplied}
        question={item.question}
      />{' '} */}
    </SafeAreaView>
  );
}
