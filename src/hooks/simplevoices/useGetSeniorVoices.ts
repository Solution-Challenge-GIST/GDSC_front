import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_SENIOR_VOICES } from '../../constants/urls';

const getSeniorVoices = async () => {
  const result = await axios.get(GET_SENIOR_VOICES, {
    params: { page: 1 },
  });
  return result.data;
};

export const useGetSeniorVoices = () => {
  return useQuery('useGetSeniorVoices', getSeniorVoices);
};
