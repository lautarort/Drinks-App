import { GET_PRODUCTS, GET_PRODUCTS_DETAILS } from "../actions/const";

const initialState={
    products: [],
    cart: [],
    product: {},
    user: {}
}



function reducer(state= initialState, action){
    switch(action.type){
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            };
            case GET_PRODUCTS_DETAILS:
                return {
                    ...state,
                    product: action.payload
                };
        default:
            return state

        }         
}


export default reducer;



