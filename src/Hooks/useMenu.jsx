import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiousPublic from "./useAxiousPublic";

const useMenu =()=>{
    const axiosPublic=useAxiousPublic();

    //   const [menu, setMenu] = useState([]);
    //   const [loading,setLoading]=useState(true);
    
    //     useEffect(() => {
    //         fetch('http://localhost:3000/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             // const populaarItem = data.filter(item => item.category === 'popular');
    //             // setMenu(populaarItem);
    //             setMenu(data);
    //             setLoading(false);
    //         });
    //     }, []);
    //     return[menu,loading]
    const {data: menu=[],isPending:loading,refetch}=useQuery({
        queryKey:['menu'],
        queryFn:async()=>{
            const res=await axiosPublic.get('/menu');
            return res.data;
        }
    })
    return [menu,loading,refetch]
}
export default useMenu;