import axios from "axios";

export default ({ $axios }, inject) => {
    const axiosInstance = axios.create({
      baseURL: 'http://localhost:8000'
    })
  
    inject('axios', axiosInstance)
  }