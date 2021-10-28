import axios from 'axios';
import { 
    GET_PRODUCTS_DETAILS,
    GET_PRODUCTS,
    GET_CATEGORIES,
    FILTER_BY_CATEGORY,
    SET_PAGE,
    SET_CATEGORY,
    // GET_PRODUCTS_DETAILS,
    // GET_PRODUCTS_NAME, 
    // FILTER_CERVEZA, 
    // FILTER_DESTILADOS, 
    // FILTER_ESPUMANTES, 
    // FILTER_SINAL, 
    // FILTER_VINO, 
    // FILTER_VODKA, 
    // FILTER_WISKY, 
} from './const';


export const getProducts = () => async (dispatch) => {
    try {
        const res = await axios.get(`/user/items`);
        return dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
  };


  
export const getProductsDetails = (id) => async (dispatch) => {
    try {
        const res = await axios.get("/user/items/" + id);
        
        return dispatch({
            type: GET_PRODUCTS_DETAILS,

export const getCategories = () => async (dispatch) => {
    try {
        let categories = await axios.get("/user/items/categories");
        return dispatch({
            type: GET_CATEGORIES,
            payload: categories.data
        });
    }
    catch (error) {
        console.log(error);
    }
};

  export const filterByCategory = (category) => async (dispatch) =>  {
    try {
        const res = await axios.get(`/user/items/filter/${category}`);
        return dispatch({
            type: FILTER_BY_CATEGORY,

            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
  };


  

  export const setPage = (page) => {
    return {
        type: SET_PAGE,
        payload: page
    }
  };

  export const setCategory = (category) => {
    return {
        type: SET_CATEGORY,
        payload: category
    }
  };

