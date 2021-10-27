import { GET_PRODUCTS } from "../actions/const";

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
        
        default:
            return state

        }         
}


export default reducer;



