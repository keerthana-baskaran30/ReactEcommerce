import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/ecommerce/",
});

// axiosInstance.interceptors.request.use(
//   (request) => {
//     const encodeStr = localStorage.getItem('authString')
//     // console.log("authn Strin",encodeStr)
//     request.headers['Authorization'] = `Basic ${encodeStr}`

//     return request
//   },
//   (error) => {
//     return error
//   }
// )

export default axiosInstance
