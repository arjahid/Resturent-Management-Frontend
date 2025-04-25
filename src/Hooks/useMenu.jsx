import { useEffect, useState } from "react";

const useMenu =()=>{

      const [menu, setMenu] = useState([]);
      const [loading,setLoading]=useState(true);
    
        useEffect(() => {
            fetch('Menu.json')
            .then(res => res.json())
            .then(data => {
                // const populaarItem = data.filter(item => item.category === 'popular');
                // setMenu(populaarItem);
                setMenu(data);
                setLoading(false);
            });
        }, []);
        return[menu,loading]
}
export default useMenu;