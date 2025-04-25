import React from 'react';
import { Helmet } from 'react-helmet-async';
import coverImage from '../../../assets/shop/banner2.jpg';
import Cover from '../../../shared/Cover/Cover'; // Import the Cover component

const Order = () => {
    return (
        <div>
            <Helmet>
                <title>Forest | Order</title>
            </Helmet>
            <Cover img={coverImage} tittle="Order Food" />
        </div>
    );
};

export default Order;