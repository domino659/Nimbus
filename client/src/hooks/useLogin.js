import axios from 'axios';

export default function useLogin() {
  return (email, password) => {
    return axios({
      url: 'http://localhost:4000/api/user/login',
      method: 'post',
      data: {
        email: email,
        password: password,
      },
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.data)
      .catch((res) => console.log('error', res));
  };
}
