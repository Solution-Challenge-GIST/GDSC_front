import axios from 'axios';
import { useMutation } from 'react-query';
import { SENIOR_PROFILE_UPDATE } from '../../constants/urls';
import { SeniorProfileInfo } from '../../type';

interface SeniorProfileInfoWithSeniorId extends SeniorProfileInfo {
  seniorId: number;
}

const seniorProfileUpdate = (props: SeniorProfileInfoWithSeniorId) => {
  const { seniorId } = props;

  let clone = { ...props };
  delete clone.seniorId;

  const result = axios.put(SENIOR_PROFILE_UPDATE(seniorId), {
    ...clone,
  });
  return result.data;
};

const useSeniorProfileUpdate = (props: SeniorProfileInfoWithSeniorId) => {
  return useMutation('useSeniorProfileUpdate', seniorProfileUpdate);
};
