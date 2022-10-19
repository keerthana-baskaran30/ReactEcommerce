import * as types from "store/action/actionTypes";

const initialState = {
  products:[],
  singleProduct:[],
  sellerProducts:[],
}

const productsReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_PRODUCTS:
            console.log("reducer",action.payload)
            console.log(state.products)
            return{ ...state,products:action.payload};
           
        case types.GET_PRODUCT:
          console.log("get product reducer",action.payload)
          console.log(state.singleProduct)
          return {...state,singleProduct:action.payload};
        
          case types.GET_SELLER_PRODUCTS:
            console.log("seller pr",action.payload)
            return {...state,sellerProducts:action.payload.data};
      default:
        return state;
    }
  };

  export default productsReducers;