import { combineReducers } from "redux";
import productsReducers from "./productsReducers";
import usersReducer from "./usersReducers";


const rootReducer = combineReducers({
  userData: usersReducer,
  productData: productsReducers,
 
});

export default rootReducer;
