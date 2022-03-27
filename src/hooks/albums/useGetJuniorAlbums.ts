import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_JUNIOR_ALBUMS } from '../../constants/urls';

const getJuniorAlbums = async () => {
  const result = await axios.get(GET_JUNIOR_ALBUMS, {
    params: {
      page: 1,
    },
  });
  return result.data;
};

export const useGetJuniorAlbums = () => {
  return useQuery('useGetJuniorAlbums', getJuniorAlbums);
};
