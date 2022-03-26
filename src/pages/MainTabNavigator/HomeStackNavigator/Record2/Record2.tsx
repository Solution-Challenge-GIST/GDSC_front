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

export default function Record2(props) {
  //props.route.params.person
  console.log(props.route.params);
  //아래 결과
  // Object {
  //   "person": Object {
  //     "name": "배정윤",
  //     "relative": "딸",
  //   },
  // }
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
    <View>
      <View
        style={{
          alignItems: 'center',
          marginTop: getDisplayHeight(120),
          marginHorizontal: getDisplayWidth(19),
        }}
      >
        {!isRecoding && !hasRecordFile && (
          <>
            <Text style={record2Styles.font}>Click button to Record.</Text>
            <Image
              style={record2Styles.radioImage}
              source={require('./images/radio.png')}
            />
          </>
        )}
        {isRecoding && !hasRecordFile && (
          <>
            <Text style={record2Styles.font}>Now Recoding...</Text>
            <Image
              style={record2Styles.radioImageRecoding}
              source={require('./images/recodingRadio.png')}
            />
          </>
        )}
        {!isRecoding && hasRecordFile && (
          <>
            {/* <Text style={record2Styles.font}>기록이 멈췄어요!</Text> */}
            <Text style={record2Styles.font}>Recorded! Want save?</Text>
            <Image
              style={record2Styles.radioImageRecoding}
              source={require('./images/recordDoneRadio.png')}
            />
          </>
        )}

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          {!hasRecordFile && !isRecoding && (
            <View style={{ alignItems: 'center' }}>
              <RadioButton type="record" onPress={toggleRecoding} />
              <Text style={record2Styles.buttonText}>Start Recoding</Text>
            </View>
          )}
          {!hasRecordFile && isRecoding && (
            <View style={{ alignItems: 'center' }}>
              <RadioButton type="stop" onPress={toggleRecoding} />
              <Text style={record2Styles.buttonText}>Stop Recoding</Text>
            </View>
          )}
        </View>
        {hasRecordFile && !isRecoding && (
          <View style={record2Styles.recordDoneButtonsContainer}>
            <NormalButton
              onPress={() => console.log('서버로 음성파일 보내는 함수 실행')}
              text="Save"
            />
            <NormalButton onPress={onReRecord} text="Delete and re-recording" />
          </View>
        )}
      </View>
    </View>
  );
}
