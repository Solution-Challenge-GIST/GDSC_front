import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { AlbumSeniorVoiceStyles } from './style';
import { getDisplayWidth } from '../../../utility';
import { Audio } from 'expo-av';
import { Sound } from 'expo-av/build/Audio';

interface Props {
  id: number;
  username: string;
  isReplied: boolean;
  voiceURI: string;
}
export default function AlbumSeniorVoice(props: Props) {
  const { id, username, isReplied, voiceURI } = props;
  const voice =
    'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3';
  const [isLoading, setIsLoading] = useState(false);
  const sound = new Audio.Sound();
  const playSound = async () => {
    // await sound.loadAsync({
    //   uri: require('../../../constants/audioSample/audio1.mp3'),
    // });
    await sound.loadAsync({ uri: voice });
    await sound.playAsync();
  };

  const goDetail = async () => {
    const data = await sound.getStatusAsync();
    if (data.isLoaded === false) {
      playSound();
    } else {
      if (data.isPlaying === false) {
        playSound();
      } else {
        console.log('실행중입니다.');
      }
    }
  };

  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumSeniorVoiceStyles.container}>
        <View style={{ flexDirection: 'row', marginLeft: getDisplayWidth(9) }}>
          <Image
            style={AlbumSeniorVoiceStyles.speaker}
            source={require('./images/speaker.png')}
          />
          <View style={{ marginLeft: getDisplayWidth(16) }}>
            <Text style={AlbumSeniorVoiceStyles.font}>Sent from</Text>
            <Text style={AlbumSeniorVoiceStyles.font}>{username}</Text>
          </View>
        </View>
        {isReplied ? (
          <Image
            style={AlbumSeniorVoiceStyles.replyStatus}
            source={require('../images/isReplied.png')}
          />
        ) : (
          <Image
            style={AlbumSeniorVoiceStyles.replyStatus}
            source={require('../images/needReply.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
