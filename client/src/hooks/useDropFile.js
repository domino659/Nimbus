import axios from 'axios'

export default function useDropFile () {
  return (firstName, lastName, filePath, password) => {
    return axios({
      url: 'http://localhost:4000/api/file/drop',
      method: 'post',
      data: {
        firstName: firstName,
        lastName: lastName,
        filePath: filePath,
        password: password,
      },
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.data)
      .catch(res => console.log('error', res))
  }
}
