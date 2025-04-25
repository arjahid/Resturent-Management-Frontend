import React, { useEffect, useState } from 'react';
import MenuItem from '../../../shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMenu';

const PropularMenu = () => {
    // const [menu, setMenu] = useState([]);

    // useEffect(() => {
    //     fetch('Menu.json')
    //     .then(res => res.json())
    //     .then(data => {
    //         const populaarItem = data.filter(item => item.category === 'popular');
    //         setMenu(populaarItem);
    //     });
    // }, []);
    const [menu]=useMenu();
    const popularItems = menu.filter(item => item.category === 'popular');

    return (
        <div className="w-11/12 sm:w-10/12 lg:w-8/12 mx-auto my-8">
            <h2 className="text-3xl font-bold text-center text-white mb-6">Popular Menu</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                    popularItems.map(item => (
                        <div 
                            key={item._id} 
                            className="transform transition-transform hover:scale-105 hover:shadow-lg"
                        >
                            <MenuItem item={item}></MenuItem>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PropularMenu;