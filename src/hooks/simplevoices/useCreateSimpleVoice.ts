import axios from 'axios';
import { useMutation } from 'react-query';
import { SENIOR_TOKEN } from '../../constants/token';
import {
  BASE_URL,
  CREATE_SIMPLE_VOICE,
  CREATE_SIMPLE_VOICE_URI,
} from '../../constants/urls';

export async function makeSimpleVoiceUri(uri: string) {
  const path = `${BASE_URL}${CREATE_SIMPLE_VOICE_URI}`;
  let type = uri.substring(uri.lastIndexOf('.') + 1);
  const form = new FormData();
  form.append('voice', { uri, name: uri, type: `audio/${type}` } as any);
  const result = await fetch(path, {
    method: 'POST',
    headers: {
      Authorization: SENIOR_TOKEN,
      'Content-Type': 'multipart/form-data',
    },
    body: form,
  })
    .then(response => response.json())
    .then(data => data.voice);
  return result;
}

const createSimpleVoice = async ({ juniorId, voice }) => {
  const result = await axios.post(CREATE_SIMPLE_VOICE(juniorId), {
    voice,
  });
  return result.data;
};
export const useCreateSimpleVoice = () => {
  return useMutation(createSimpleVoice);
};
