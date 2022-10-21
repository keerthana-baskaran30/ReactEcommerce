import * as types from "store/action/actionTypes";

const initialState = {
  products: [],
  singleProduct: [],
  sellerProducts: [],
  cart: [],
  successMessage: "",
  errorMessage: "",
}

const productsReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PRODUCTS:
      console.log("reducer", action.payload)
      console.log(state.products)
      return { ...state, products: action.payload };

    case types.GET_PRODUCT:
      console.log("get product reducer", action.payload)
      console.log(state.singleProduct)
      return { ...state, singleProduct: action.payload };

    case types.GET_SELLER_PRODUCTS:
      console.log("seller pr", action.payload)
      return { ...state, sellerProducts: action.payload.data };

    case types.ADD_PRODUCT:
    case types.PRODUCT_UPDATE:
    case types.DELETE_PRODUCT:
    case types.DELETE_CART:
      console.log("add product", action.payload)
      return { ...state, successMessage: action.payload }

    case types.ADD_TO_CART:
      console.log("add to cart",action.payload)
      return {...state,successMessage:action.payload.successMessage}

    case types.PRODUCT_NOT_ADDED:
    case types.PRODUCT_NOT_DELETED:
    case types.PRODUCT_NOT_UPDATED:
      console.log("not added", action.payload)
      return { ...state, errorMessage: action.payload }

    case types.PRODUCT_ADDED:
    case types.PRODUCT_DELETED:
    case types.PRODUCT_UPDATED:
      return { ...state, successMessage:"" }
    
    

    case types.DISPLAY_CART:
      console.log("inside cart display", action.payload)
      return { ...state, cart: action.payload }

    default:
      return state;
  }
};

export default productsReducers;