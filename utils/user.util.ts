import { LoginProps } from '@/constants/types';
import axios from 'axios';

export const userLogin = async ({ username, password }: LoginProps) => {
  const controller = new AbortController();
  const signal = controller.signal;
  const body = {
    url: 'http://192.168.0.219:8080/users/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    data: {
      userName: username,
      password: password,
    },
    signal: signal,
  };

  try {
    const response = await axios.request(body);
    return response;
  } catch (e) {
    console.log(e);
  }
};
