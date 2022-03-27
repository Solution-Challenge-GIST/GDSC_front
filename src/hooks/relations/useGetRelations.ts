import axios from 'axios';
import { useQuery } from 'react-query';
import { GET_RELATIONS } from '../../constants/urls';

const getRelations = async () => {
  const result = await axios.get(GET_RELATIONS, {
    params: {
      page: 1,
    },
  });
  return result.data;
};

export const useGetRelations = () => {
  return useQuery('useGetRelations', getRelations);
};
