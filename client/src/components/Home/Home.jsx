import React from 'react';
import Cards from '../Cards/Cards';
import Categories from "../Categories/Categories";
import Modal from '../Modal/Modal';
import Pagination from "../Pagination/Pagination";




const Home = () => {
 

    return (
        <div>
            <Modal />
            <Pagination />
            <Categories />
            <Cards />
        </div>
    )

};

export default Home;