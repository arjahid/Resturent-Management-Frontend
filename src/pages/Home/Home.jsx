import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Sort from './sorttext/Sort';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Sort></Sort>
           <Category></Category>
        </div>
    );
};

export default Home;