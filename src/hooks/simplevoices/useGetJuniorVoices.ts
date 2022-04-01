import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_JUNIOR_VOICES } from '../../constants/urls';

const getJuniorVoices = async () => {
  const result = await axios.get(GET_JUNIOR_VOICES, {
    params: { page: 1 },
  });
  return result.data;
};

export const useGetJuniorVoices = () => {
  return useQuery('useGetSeniorVoices', getJuniorVoices);
};
