import { GET_PRODUCTS, GET_CATEGORIES, UNMOUNT_GET, SET_PAGE, SET_CATEGORY, GET_PRODUCTS_DETAILS } from "../actions/const";
import { sliceArray } from "./sliceArray";

const initialState = {
    products: [], // contiene sólo los productos de una página
    allProducts: [], // contiene todos los productos
    cart: [],
    product: {},
    user: {},
    categories: [],
    category: "",
    page: 1,
}

function reducer(state = initialState, action) {
    switch (action.type) {
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
        case UNMOUNT_GET:
            return {
                ...state,
                products: [],
                allProducts: [],
                product: {},
                category: "",

            }
        case SET_PAGE:
            return {
                ...state,
                page: action.payload
            };
        case GET_PRODUCTS_DETAILS:
            return {
                ...state,
                product: action.payload
            };
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