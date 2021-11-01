import React from 'react';
import Cards from '../Cards/Cards';
import Modal from '../Modal/Modal';
import Pagination from "../Pagination/Pagination";
import Pagination from "../Pagination/Pagination";  
import CarouselCombo from "../CarouselCombo/CarouselCombo"

const Home = () => {
    return (
        <div>
            <CarouselCombo />
            <Modal />
            <Cards />
            <Pagination />
        </div>
    )
};

export default Home;