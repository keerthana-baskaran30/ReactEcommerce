import * as types from "./actionTypes";
import axiosInstance from "../../api/api";
import auth from "shared/utils/auth";

const registerUser = (user) => ({
    type: types.REGISTER_USER,
    payload: user,
});

const loginUser = (user) => ({
    type: types.LOGIN_USER,
    payload: user
});

const getProducts = (productData) => ({
    type: types.GET_PRODUCTS,
    payload: productData
});


export default function registerData(user) {
    return async function (dispatch) {
        axiosInstance.post("/customer/register", user)
            .then((response) => {
                console.log(response, "dispatching regitser user")
                dispatch(registerUser(user))
            }).catch((error) => {
                console.log(error)
                console.log("error")
                dispatch(registerUser(user))
            })
    }
}


export function loginData(user) {
    const encodeStr = auth(user)
    console.log(encodeStr)
    return function (dispatch) {
        axiosInstance.post("/login", user, {headers: {
            'Authorization': `Basic ${encodeStr}`
          }})
            .then((response) => {
                if (response.status === 200) {
                    console.log(response, "dispatching login user")
                    dispatch(loginUser(response.data))
                    localStorage.setItem("authString",encodeStr)
                }

            }).catch((error) => {
                console.log(error)
            })
    }
}



export function displayProducts() {
    console.log("inside siapla")
    return function (dispatch) {
        axiosInstance.get("/products")
            .then((response) => {
                console.log(response, "dispatching getproducts")
                dispatch(getProducts(response.data.results))
                console.log(dispatch(getProducts(response.data.results))) //returns an array of objects
            }).catch((error) => {

                console.log(error)
                console.log("error")
                // dispatch(getProducts())
            })
    }

}