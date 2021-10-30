import React from 'react';
import Cards from '../Cards/Cards';
// import Categories from "../Categories/Categories";
import Pagination from "../Pagination/Pagination";  
import CarouselCombo from "../CarouselCombo/CarouselCombo"

const Home = () => {
    return (
        <div>
            {/* <Categories /> */}
            <CarouselCombo />
            <Cards />
            <Pagination />
        </div>
    )

};

export default Home;