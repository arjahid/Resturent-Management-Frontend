import axios from 'axios';

const axiousSecure = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend base URL
});

const useAxious = () => {
  axiousSecure.interceptors.request.use((config)=>{
    const token=localStorage.getItem("access-token");
    config.headers.authorization=`Bearer ${token}`;
    // You can log the request config or token here for debugging
    console.log("Request Config:",token);
    return config;
  },
  (err)=>{
    return Promise.reject(err);
  }
)
  return axiousSecure; // Directly return the Axios instance
};

export default useAxious;