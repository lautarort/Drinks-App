import { GET_PRODUCTS, GET_CATEGORIES, FILTER_BY_CATEGORY, SET_PAGE, SET_CATEGORY } from "../actions/const";
import { sliceArray } from "./sliceArray";

const initialState={
    products: [],
    allProducts: [],
    cart: [],
    product: {},
    user: {},
    categories: [],
    category: "",
    page: 1,

}

function reducer(state= initialState, action){
    // let allProducts = [...action.payload];
    // let products = [...action.payload];
    switch(action.type){
        case GET_PRODUCTS:
            let allProducts = [...action.payload];
            let products = [...action.payload];
            products = sliceArray(state.page, products);
            return {
                ...state,
                products: products,
                allProducts: allProducts
            }
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case FILTER_BY_CATEGORY:
            let todos = [...action.payload];
            let items = [...action.payload];
            items = sliceArray(state.page, items);
            return {
                ...state,
                products: items,
                allProducts: todos
            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }
        default:
            return state
        }         
}


export default reducer;



