import React from 'react';

const MenuItem = ({ item }) => {
    const { name, recipe, image, price } = item;
    return (
        <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ">
            <div className="flex justify-between items-center mb-4">
                <div className="flex gap-4">
                    <img src={image} alt={name} className="w-16 h-16 rounded-full border-2 border-gray-300" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                        <p className="text-gray-500 text-sm">{recipe}</p>
                    </div>
                </div>
                <span className="text-lg font-bold text-gray-800">${price}</span>
            </div>
            <hr className="border-t border-gray-300" />
        </div>
    );
};

export default MenuItem;