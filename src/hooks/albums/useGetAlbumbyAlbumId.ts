import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_ALBUM_BY_ALBUM_ID } from '../../constants/urls';

const getAlbumbyAlbumId = async (albumId: number) => {
  const result = await axios.get(GET_ALBUM_BY_ALBUM_ID(albumId));

  return result.data;
};

export const useGetAlbumByAlbumId = (albumId: number) => {
  return useQuery(['useGetAlbumByAlbumId', albumId], () =>
    getAlbumbyAlbumId(albumId),
  );
};
