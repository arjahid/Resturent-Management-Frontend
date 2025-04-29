import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";
import useAuth from "./useAuth";


const useCart = () => {
    const axiousSecure=useAxious()
    const {user}=useAuth();
//    tan stack query
const {refetch, data:cart}=useQuery({
      queryKey:['cart',user?.email],
        queryFn:async()=>{
            const res=await  axiousSecure.get(`/carts?email=${user?.email}`)
            return res.data;
        }

})
return [cart,refetch]

};

export default useCart;