import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_SENIOR_ALBUMS } from '../../constants/urls';

const getSeniorAlbums = async () => {
  const result = await axios.get(GET_SENIOR_ALBUMS, {
    params: 20,
  });
  return result.data;
};

export const useGetSeniorAlbums = () => {
  return useQuery('useGetJuniorAlbums', getSeniorAlbums);
};
