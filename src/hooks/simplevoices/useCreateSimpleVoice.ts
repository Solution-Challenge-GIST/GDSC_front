import axios from 'axios';
import { useMutation } from 'react-query';
import { CREATE_SIMPLE_VOICE } from '../../constants/urls';

const createSimpleVoice = async formdata => {
  const result = await axios.post(CREATE_SIMPLE_VOICE, formdata, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return result.data;
};
export const useCreateSimpleVoice = () => {
  return useMutation(createSimpleVoice);
};
