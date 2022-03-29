import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useME } from '../../../hooks/accounts/useMe';
import { AlbumCardInfo } from '../../../type';
import { getDisplayWidth } from '../../../utility';
import Calendar from '../../calendar/Calendar';
import { AlbumCardStyles } from './style';
interface MainAlbum extends AlbumCardInfo {
  month: string;
  day: string;
  date: string;
}
export default function MainAlbumCard(props: MainAlbum) {
  const navigation = useNavigation();
  const { id, username, uri, isReplied, month, day, date } = props;
  const { data: Me } = useME();

  const goDetail = () => {
    navigation.navigate('Detail', { albumId: id });
  };

  return (
    <View>
      <TouchableOpacity onPress={goDetail}>
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
                <Text style={AlbumCardStyles.MainUserInfo}>From</Text>
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
