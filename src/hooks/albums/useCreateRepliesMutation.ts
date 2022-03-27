import axios from 'axios';
import { useMutation } from 'react-query';
import { CREATE_REPLIES_BY_ALBUM_ID } from '../../constants/urls';

const createReplies = async (albumId: number, voice: string) => {
  const result = await axios.post(CREATE_REPLIES_BY_ALBUM_ID(albumId), {
    voice,
  });
  return result.data;
};

export const useCreateRepliesMutation = () => {
  return useMutation(createReplies);
};
