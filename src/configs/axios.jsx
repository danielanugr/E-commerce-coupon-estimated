import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ecommerce-cms-dudun.herokuapp.com'
})

export default instance
