import axios, { AxiosError } from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // baseURL: "https://ecommerce-hekto-dl.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Origin": "*",
  },
});

axiosClient.interceptors.request.use(async (request) => {
  return request;
});

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },
  function (error: AxiosError) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // 401, 403, 500
    return Promise.reject(error.response?.data); // should be error response body
  }
);

export default axiosClient;
