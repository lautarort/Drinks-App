import { GET_PRODUCTS, GET_CATEGORIES, FILTER_BY_CATEGORY, SET_PAGE, SET_CATEGORY, GET_PRODUCTS_DETAILS } from "../actions/const";
import { sliceArray } from "./sliceArray";

const initialState={
    products: [], // contiene sólo los productos de una página
    allProducts: [], // contiene todos los productos
    cart: [],
    product: {},
    user: {},
    categories: [],
    category: "",
    page: 1,

}

function reducer(state= initialState, action){
    let allProducts;
    let products;
    switch(action.type){
        case GET_PRODUCTS:
            allProducts = [...action.payload];
            products = [...action.payload];
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
            allProducts = [...action.payload];
            products = [...action.payload];
            products = sliceArray(state.page, products);
            return {
                ...state,
                products: products,
                allProducts: allProducts
            }
        case SET_PAGE:
            return {
                ...state,

                products: action.payload
            };
            case GET_PRODUCTS_DETAILS:
                return {
                    ...state,
                    product: action.payload
                };

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



