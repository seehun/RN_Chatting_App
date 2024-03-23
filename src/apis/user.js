import {API} from '.';

export const getMyInfo = async () => {
  const res = await API.get('api/info');
  console.log(res);
};
