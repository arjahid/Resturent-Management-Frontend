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
      if (error.response && error.response.status === 401) {
        // Handle unauthorized access
        console.error("Unauthorized access - redirecting to login");
        localStorage.removeItem("access-token");
        await logout(); // Call the logout function to clear user state
        window.location.href = "/login"; // Redirect to login page
      }
      return Promise.reject(error);
    }
  );
  return axiousSecure; // Directly return the Axios instance
};

export default useAxious;
