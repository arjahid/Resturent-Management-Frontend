import axios from "axios";
import useAuth from "./useAuth";

const axiousSecure = axios.create({
  baseURL: "http://localhost:3000", // Replace with your backend base URL
});

const useAxious = () => {
  const {logout}=useAuth()
  axiousSecure.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      // You can log the request config or token here for debugging
      console.log("Request Config:", token);
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );
  axiousSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async(error) => {
      const status=error.response?.status;
      if (status === 401 || status === 403) {
        await logout(); 
        
        // localStorage.removeItem("access-token");
        
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
  return axiousSecure; // Directly return the Axios instance
};

export default useAxious;
