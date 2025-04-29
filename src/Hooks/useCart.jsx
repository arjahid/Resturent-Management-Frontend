import { useQuery } from "@tanstack/react-query";
import useAxious from "./useAxious";


const useCart = () => {
    const axiousSecure=useAxious()
//    tan stack query
const {data:cart}=useQuery({
      queryKey:['carts'],
        queryFn:async()=>{
            const res=await  axiousSecure.get('/carts')
            return res.data;
        }

})
return [cart]

};

export default useCart;