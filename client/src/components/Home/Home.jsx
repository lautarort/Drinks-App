import React from 'react';
import Cards from '../Cards/Cards';
import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";

const Home = () => {
    return (
        <div>
            <Pagination />
            <Categories />
            <Cards />
        </div>
    )

};

export default Home;