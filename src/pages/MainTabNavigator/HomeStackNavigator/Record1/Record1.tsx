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

  const navigation = useNavigation();
  const goRecord2 = (props: Relationship) => {
    navigation.navigate('Record2', { relationship: props });
  };
  if (!isLoading) {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView bounces={true} style={{ marginBottom: 92 }}>
          <View style={record1Styles.position}>
            <Text style={record1Styles.text}>Who get your voice?</Text>
            {data.map((item: Relationship) => {
              const { junior, relation } = item;
              return (
                <View key={junior.junior_id} style={{ marginTop: 30 }}>
                  <Relativebutton
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
  } else {
    return <View></View>;
  }
}
