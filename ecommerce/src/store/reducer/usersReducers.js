import * as types from "../action/actionTypes";
const initialState = {
    users:[]
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return ({...state,users:action.payload})
    case types.LOGIN_USER:
      return ({ ...state,users:action.payload})
 
   
    default:
      return state;
  }
};

export default usersReducer

