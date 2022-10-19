import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/ecommerce/",
});

// axiosInstance.interceptors.request.use(
//   (request) => {
//     const authString = localStorage.getItem("authString");
//     request.headers["Authorization"] = `Basic ${authString}`;
//     return request;
//   },
//   (error) => {
//     return error;
//   }
// )

export default axiosInstance;
