import axios from 'axios';
import { useMutation } from 'react-query';
import { JUNIOR_TOKEN } from '../../constants/token';
import {
  BASE_URL,
  CREATE_ALBUM,
  CREATE_IMAGE_URI,
  CREATE_VOICE_URI,
} from '../../constants/urls';

export async function makeImageUri(uri: string) {
  const path = `${BASE_URL}${CREATE_IMAGE_URI}`;
  let type = uri.substring(uri.lastIndexOf('.') + 1);
  const form = new FormData();
  form.append('image', { uri, name: uri, type: `image/${type}` } as any);
  const result = await fetch(path, {
    method: 'POST',
    headers: {
      Authorization: JUNIOR_TOKEN,
      'Content-Type': 'multipart/form-data',
    },
    body: form,
  })
    .then(response => response.json())
    .then(data => data.image);
  return result;
}

export async function makeVoiceUri(uri: string) {
  const path = `${BASE_URL}${CREATE_VOICE_URI}`;
  let type = uri.substring(uri.lastIndexOf('.') + 1);
  const form = new FormData();
  form.append('voice', { uri, name: uri, type: `voice/${type}` } as any);
  const result = await fetch(path, {
    method: 'POST',
    headers: {
      Authorization: JUNIOR_TOKEN,
      'Content-Type': 'multipart/form-data',
    },
    body: form,
  })
    .then(response => response.json())
    .then(data => data.voice);
  return result;
}

const createAlbum = async ({ seniorId, voiceUri, imageUri }) => {
  const result = await axios.post(CREATE_ALBUM(seniorId), {
    image: imageUri,
    voice: voiceUri,
  });
  return result.data;
};

export const useCreateAlbum = () => {
  return useMutation(createAlbum);
};
