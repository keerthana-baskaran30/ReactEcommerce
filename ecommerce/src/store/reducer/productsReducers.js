import * as types from "../action/actionTypes";

const initialState = {
  products:[],
  user:"dcd",
}

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            console.log("reducer",action.payload)
            console.log(state.products)
            console.log("payload_data",action.payload)
            return{ ...state,products:action.payload};
            // return { ...state, products: action.payload};
      
      default:
        return state;
    }
  };

  export default productsReducers;