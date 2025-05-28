import axios from 'axios';

const axiosPublic=axios.create({
   baseURL: 'https://resturent-management-server-eight.vercel.app', 
})

const useAxiousPublic = () => {
    return axiosPublic;

};

export default useAxiousPublic;