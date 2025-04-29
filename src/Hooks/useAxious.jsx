import axios from 'axios';

const axiousSecure = axios.create({
  baseURL: 'http://localhost:3000', // Replace with your backend base URL
});

const useAxious = () => {
  return axiousSecure; // Directly return the Axios instance
};

export default useAxious;