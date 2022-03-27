import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_REPLIES_BY_ALBUM_ID } from '../../constants/urls';

const getRepliesByAlbumId = async (albumId: number) => {
  const result = await axios.get(GET_REPLIES_BY_ALBUM_ID(albumId), {
    params: {
      page: 20,
    },
  });
  return result.data;
};

export const useGetRepliesByAlbumId = (albumId: number) => {
  return useQuery(['useGetRepliesByAlbumId', albumId], () =>
    getRepliesByAlbumId(albumId),
  );
};
