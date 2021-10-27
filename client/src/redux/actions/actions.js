import axios from 'axios';
import { 
    GET_PRODUCTS, 
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
        const res = await axios.get("/user/items");
        
        return dispatch({
            type: GET_PRODUCTS,
            payload: res.data,
        });
    } catch (error) {
        console.log(error);
    }
  };