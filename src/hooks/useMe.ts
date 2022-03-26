import axios from 'axios';
import { useQuery } from 'react-query';
import { BASE_URL, GET_ME } from '../constants/urls';

const me = async () => {
  const result = await axios.get(GET_ME);
  return result.data;
};

export const useME = () => {
  return useQuery('useMe', me);
};
