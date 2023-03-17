import axios from 'axios';

export default function useRegister() {
  return (firstName, lastName, email, password, passwordConfirm) => {
    return axios({
      url: 'http://13.74.242.210/api/user/register',
      method: 'post',
      data: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      },
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.data)
      .catch((res) => console.log('error', res));
  };
}
