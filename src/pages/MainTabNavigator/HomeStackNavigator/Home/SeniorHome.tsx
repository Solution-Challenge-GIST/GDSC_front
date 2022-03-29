import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import MainAlbumCard from '../../../../components/Album/AlbumCard/MainAlbumCard';
import QuestionBox from '../../../../components/QuestionBox/QuestionBox';
import { DAY } from '../../../../constants/day';
import { useFocusEffect } from '@react-navigation/native';
import { useGetSeniorAlbums } from '../../../../hooks/albums/useGetSeniorAlbums';
import { getDisplayHeight } from '../../../../utility';
import { HomeStyles } from './style';
import { useCallback } from 'react';

export default function SeniorHome() {
  const navigation = useNavigation();
  const {
    data: albumSenior,
    isLoading: isSeniorLading,
    refetch: refetchSenior,
  } = useGetSeniorAlbums();

  useFocusEffect(
    useCallback(() => {
      refetchSenior();
    }, []),
  );

  const onPress = () => {
    navigation.navigate('Record1');
  };
  if (!isSeniorLading) {
    return (
      <View>
        <ScrollView style={{ marginBottom: 92 }}>
          <View style={HomeStyles.MainContainer}>
            <Text style={HomeStyles.font}>There's a question!</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              marginBottom: getDisplayHeight(24),
            }}
          >
            <QuestionBox payload="What was the happiest thing your child did?"></QuestionBox>
          </View>

          <View style={HomeStyles.UnanswerContainer}>
            <Text style={HomeStyles.font}>Unanswered</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            {albumSenior.results.map(item => {
              if (item.is_replied === false) {
                const [year, month, date] = item.created_date.split('-');
                return (
                  <View style={{ marginBottom: getDisplayHeight(30) }}>
                    <MainAlbumCard
                      key={item.album_id}
                      id={item.album_id}
                      username={item.junior.name}
                      uri={item.img}
                      isReplied={item.isReplied}
                      month={month}
                      day={DAY[item.day]}
                      date={date}
                    />
                  </View>
                );
              }
            })}
          </View>
        </ScrollView>
        <TouchableOpacity style={HomeStyles.AudioFix} onPress={onPress}>
          <Image
            style={HomeStyles.AudioContainer}
            source={require('./HomeImage/Audio.png')}
          />
        </TouchableOpacity>
      </View>
    );
  } else {
    return <View></View>;
  }
}
