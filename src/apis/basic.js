import {API} from '.';

export const getVersion = async () => {
  const res = await API.get('api/version');
  console.log(res);
};
