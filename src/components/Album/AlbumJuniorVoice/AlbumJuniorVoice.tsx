import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useEffect } from 'react';
import { AlbumJuniorVoiceStyles } from './style';
import { useState } from 'react';
import { Audio } from 'expo-av';

export default function AlbumJuniorVoice({
  id,
  isReplied,
  voiceURI,
  name,
}: {
  id: number;
  isReplied: boolean;
  voiceURI: string;
  name: string;
}) {
  const [sound, setSound] = useState();
  const voice =
    'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3';
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync({ uri: voice });
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const goDetail = () => {
    playSound();
  };
  return (
    <TouchableOpacity onPress={goDetail}>
      <View style={AlbumJuniorVoiceStyles.container}>
        <Text style={AlbumJuniorVoiceStyles.font}>{name}</Text>
        {isReplied ? (
          <Image
            style={AlbumJuniorVoiceStyles.replyStatus}
            source={require('../images/isReplied.png')}
          />
        ) : (
          <Image
            style={AlbumJuniorVoiceStyles.replyStatus}
            source={require('../images/needReply.png')}
          />
        )}
      </View>
    </TouchableOpacity>
  );
}
