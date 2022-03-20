import {
  Text,
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { record2Styles } from './style';
import { getDisplayHeight, getDisplayWidth } from '../../../../utility';
import RadioButton from './radioButton/RadioButton';
import NormalButton from '../../../../components/button/NormalButton';

export default function Record2() {
  const [isRecoding, setIsRecoding] = useState(false);
  const [hasRecordFile, sethasRecordFile] = useState(false);

  const toggleRecoding = () => {
    if (isRecoding) {
      sethasRecordFile(prev => !prev);
    }
    setIsRecoding(prev => !prev);
  };

  const onReRecord = () => {
    setIsRecoding(false);
    sethasRecordFile(false);
    //저장된 레코드 파일을 지운는 행동? 추가될 수 있음
  };

  return (
    <SafeAreaView>
      <View
        style={{
          alignItems: 'center',
          marginTop: getDisplayHeight(120),
          marginHorizontal: getDisplayWidth(19),
        }}
      >
        {!isRecoding && !hasRecordFile && (
          <>
            <Text style={record2Styles.font}>
              버튼을 누르면 기록이 시작돼요.
            </Text>
            <Image
              style={record2Styles.radioImage}
              source={require('./images/radio.png')}
            />
          </>
        )}
        {isRecoding && !hasRecordFile && (
          <>
            <Text style={record2Styles.font}>
              지금 열심히 기록되고 있어요...
            </Text>
            <Image
              style={record2Styles.radioImageRecoding}
              source={require('./images/recodingRadio.png')}
            />
          </>
        )}
        {!isRecoding && hasRecordFile && (
          <>
            {/* <Text style={record2Styles.font}>기록이 멈췄어요!</Text> */}
            <Text style={record2Styles.font}>기록되었어요! 저장할까요?</Text>
            <Image
              style={record2Styles.radioImageRecoding}
              source={require('./images/recordDoneRadio.png')}
            />
          </>
        )}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          {!hasRecordFile && !isRecoding && (
            <RadioButton type="unrecord" onPress={toggleRecoding} />
          )}
          {!hasRecordFile && isRecoding && (
            <RadioButton type="recoding" onPress={toggleRecoding} />
          )}
          <RadioButton type="pause" onPress={() => console.log('pause')} />
          <RadioButton
            type="play"
            onPress={() => console.log('녹음된 메세지 재생됨')}
          />
          <RadioButton type="stop" onPress={() => console.log('stop')} />
        </View>
        {hasRecordFile && !isRecoding && (
          <View
            style={{
              height: getDisplayHeight(191),
              marginTop: getDisplayHeight(28),
              justifyContent: 'space-between',
            }}
          >
            <NormalButton
              onPress={() => console.log('서버로 음성파일 보내는 함수 실행')}
              text="저장하기"
            />
            <NormalButton onPress={onReRecord} text="지우고 다시 녹음하기" />
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
