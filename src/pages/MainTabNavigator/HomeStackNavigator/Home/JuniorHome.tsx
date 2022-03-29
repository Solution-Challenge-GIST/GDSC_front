import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import MainAlbumCard from '../../../../components/Album/AlbumCard/MainAlbumCard';
import QuestionBox from '../../../../components/QuestionBox/QuestionBox';
import { DAY } from '../../../../constants/day';
import { useGetJuniorAlbums } from '../../../../hooks/albums/useGetJuniorAlbums';
import { getDisplayHeight } from '../../../../utility';
import { HomeStyles } from './style';
import { useCallback } from 'react';

export default function JuniorHome() {
  const navigation = useNavigation();
  const {
    data: albumJunior,
    isLoading: isJuniorLoading,
    refetch: refetchJunior,
  } = useGetJuniorAlbums();
  useFocusEffect(
    useCallback(() => {
      refetchJunior();
    }, []),
  );
  const onPress = () => {
    navigation.navigate('AddImage');
  };
  if (!isJuniorLoading) {
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
            {albumJunior.results.map(item => {
              if (item.is_replied === false) {
                const [year, month, date] = item.created_date.split('-');
                return (
                  <View style={{ marginBottom: getDisplayHeight(30) }}>
                    <MainAlbumCard
                      key={item.album_id}
                      id={item.album_id}
                      username={item.senior.name}
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
