import React from 'react';
import MenuItem from '../../../../shared/MenuItem/MenuItem';

const Menucategory = ({items}) => {
    return (
        <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {
                    items.map(item => (
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

export default Menucategory;