import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useME } from '../../../hooks/accounts/useMe';
import { AlbumCardInfo } from '../../../type';
import Calendar from '../../calendar/Calendar';
import { AlbumCardStyles } from './style';
import { Audio } from 'expo-av';
import { useEffect, useState } from 'react';
interface DetailAlbum extends AlbumCardInfo {
  month: string;
  day: string;
  date: string;
  voice: string;
}
export default function DetailAlbumCard(props: DetailAlbum) {
  const navigation = useNavigation();
  const { id, username, uri, isReplied, voice, month, day, date } = props;
  const [sound, setSound] = useState();
  const { data: Me } = useME();
  const onVoice = () => {
    playSound();
  };
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
  return (
    <View>
      <TouchableOpacity onPress={onVoice}>
        <View style={AlbumCardStyles.Maincontainer}>
          <Image source={{ uri }} style={AlbumCardStyles.MainCardImage} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 11,
              marginTop: 17,
            }}
          >
            <View style={{ marginRight: 12 }}>
              <Calendar month={month} day={day} date={date} fontSize={'big'} />
            </View>
            {Me.role === 'SENIOR' && (
              <View>
                <Text style={AlbumCardStyles.MainUserInfo}>from</Text>
                <Text style={AlbumCardStyles.MainUserInfo}>{username}</Text>
              </View>
            )}
          </View>
          {isReplied ? (
            <Image
              style={AlbumCardStyles.replyStatus}
              source={require('../images/isReplied.png')}
            />
          ) : (
            <Image
              style={AlbumCardStyles.replyStatus}
              source={require('../images/needReply.png')}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}
