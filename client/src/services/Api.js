import axios from 'axios'

export default() => {
  return axios.create({
    baseURL: `https://frozen-cove-53963.herokuapp.com/`
  })
}
