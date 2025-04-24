import React from 'react';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Sort from './sorttext/Sort';
import Resinfo from '../../components/ResInfo/Resinfo';
import PropularMenu from './PropularMenu/PropularMenu';
import ChefRec from '../../components/ChefRecomand/ChefRec';
import Featured from './Featured/Featured';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Sort></Sort>
           <Category></Category>
           <Resinfo></Resinfo>
           <PropularMenu></PropularMenu>
           <ChefRec></ChefRec>
           <Featured></Featured>
        </div>
    );
};

export default Home;