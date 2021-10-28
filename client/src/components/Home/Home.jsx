import React from 'react';
import Cards from '../Cards/Cards';
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";  
import  Review  from '../../Review/Review';

const Home = () => {
    return (
        <div>
            <Categories />
            <Cards />
            <Pagination />
            {/* <Review /> */}
           
        </div>
    )

};

export default Home;