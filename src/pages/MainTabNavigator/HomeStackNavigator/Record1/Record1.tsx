import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import Relativebutton from '../../../../components/button/RelativeButton';
import { record1Styles } from './style';
import { useNavigation } from '@react-navigation/native';
import { useGetRelations } from '../../../../hooks/relations/useGetRelations';

interface Junior {
  junior_id: number;
  name: string;
  profile_img: string;
  user: number;
}

interface Relationship {
  junior: Junior;
  relation: string;
  relation_id: number;
}
export default function Record1() {
  const { data, isLoading } = useGetRelations();
  if (!isLoading) {
    console.log(data);
  }
  const navigation = useNavigation();
  const goRecord2 = (props: Relationship) => {
    navigation.navigate('Record2', { relationship: props });
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView bounces={true} style={{ marginBottom: 92 }}>
        <View style={record1Styles.position}>
          <Text style={record1Styles.text}>누구에게 음성을 보낼까요?</Text>
          {data.map((item: Relationship) => {
            const { junior, relation } = item;
            return (
              <View style={{ marginTop: 30 }}>
                <Relativebutton
                  key={junior.junior_id}
                  name={junior.name}
                  relative={relation}
                  onPress={() => goRecord2(item)}
                ></Relativebutton>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
