import * as types from "store/action/actionTypes";
const initialState = {
    users:[],
    successMessage:'',
    errorMessage:'',
    role:''
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTER_USER:
      return ({...state,successMessage:action.payload.successMessage})
    case types.LOGIN_USER:
      return ({ ...state,users:action.payload.data,successMessage:action.payload.successMessage,role:action.payload.role})
    case types.USER_NOT_LOGGED:
      return ({...state,errorMessage:action.payload.errorMessage})
    case types.LOGOUT_USER:
      return({...state,users:"",successMessage:"",errorMessage:"",role:""})
   
    default:
      return state;
  }
};

export default usersReducer

