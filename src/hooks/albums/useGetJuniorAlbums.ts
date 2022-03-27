import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_JUNIOR_ALBUMS } from '../../constants/urls';

const getJuniorAlbums = () => {
  const result = axios.get(GET_JUNIOR_ALBUMS, {
    params: 20,
  });
  return result.data;
};

export const useGetJuniorAlbums = () => {
  return useQuery('useGetJuniorAlbums', getJuniorAlbums);
};
