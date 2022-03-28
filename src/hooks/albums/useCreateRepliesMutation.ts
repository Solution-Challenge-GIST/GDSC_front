import axios from 'axios';
import { useMutation } from 'react-query';
import { SENIOR_TOKEN } from '../../constants/token';
import {
  BASE_URL,
  CREATE_REPLIES_BY_ALBUM_ID,
  CREATE_REPLY_VOICE_URI,
} from '../../constants/urls';

export async function makeReplyVoiceUri(uri: string, albumId: number) {
  const path = `${BASE_URL}${CREATE_REPLY_VOICE_URI(albumId)}`;
  console.log('asdfasdf', path);
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

const createReplies = async ({ albumId, voice }) => {
  console.log('createreplie api adress: ', CREATE_REPLIES_BY_ALBUM_ID(albumId));
  const result = await axios.post(CREATE_REPLIES_BY_ALBUM_ID(albumId), {
    voice,
  });
  return result.data;
};

export const useCreateRepliesMutation = () => {
  return useMutation(createReplies);
};
