import * as types from "./actionTypes";
import axiosInstance from "api/api";
import { type } from "@testing-library/user-event/dist/type";
import auth from "shared/utils/auth";

export const registerUser = (user) => ({
    type: types.REGISTER_USER,
    payload: user,
});

export const logUserIn = (user) => ({
    type: types.LOGIN_USER,
    payload: user
});

export const setLoggedIn = () => ({
    type: types.USER_LOGGED,
})

export const getProducts = (productData) => ({
    type: types.GET_PRODUCTS,
    payload: productData
});

export const getProduct = (productData) => ({
    type: types.GET_PRODUCT,
    payload: productData
})


export const userNotLogged = (error) => ({
    type: types.USER_NOT_LOGGED,
    payload: error
})

export const logoutUser = () => ({
    type: types.LOGOUT_USER,
})

export const SellerProducts = (productData) => ({
    type: types.GET_SELLER_PRODUCTS,
    payload: productData
})

export default function registerData(user, role) {
    // console.log(role)
    return async function (dispatch) {
        axiosInstance.post(`/${role}/register`, user)
            .then((response) => {
                console.log(response, "dispatching regitser user")
                dispatch(registerUser(response.data))
                localStorage.setItem('username', user['username']);
                localStorage.setItem('email', user['email']);
                localStorage.setItem('role', role);
            }).catch((error) => {
                console.log(error)
                dispatch(userNotLogged(error.response.data))

            })
    }
}


export function loginData(user) {
    // const authString = auth(user)
    return function (dispatch) {
        axiosInstance.post("/login", user)
            .then((response) => {
                console.log("response in then", response)
                if (response.status === 200) {
                    dispatch(logUserIn(response.data))
                    localStorage.setItem('username', response.data.data['username']);
                    localStorage.setItem('email', response.data.data['email']);
                    localStorage.setItem('role', response.data.role);
                }

            }).catch((error) => {
                console.log(error)
                dispatch(userNotLogged(error.response.data))
            })
    }
}

export function displayProducts(category = null) {
    // console.log("inside siapla")
    return function (dispatch) {
        if (category) {
            axiosInstance.get(`/product/category/?category=${category}`)
                .then((response) => {
                    dispatch(getProducts(response.data.results))
                }).catch((error) => {
                     console.log(error)
                })
        } else {
            axiosInstance.get('/products')
                .then((response) => {
                    dispatch(getProducts(response.data.results))
                }).catch((error) => {
                    console.log(error)
                })
        }

    }

}


export function getSingleProduct(id) {
    return function (dispatch) {
        axiosInstance.get(`product/pid?pid=${id}`)
            .then((response) => {
                console.log("response in action", response);
                dispatch(getProduct(response.data.results[0]))
            }).catch((error) => {

                console.log(error)
            })
    }
}

// export function getSellerProducts(username) {
//     console.log("username",username)
//     const user = {"username": username}
//     return function (dispatch) {
//         axiosInstance.get("/seller/product", user)
//             .then((response) => {
//                 dispatch(getProducts(response.data.results))
//             }).catch((error) => {

//                 console.log(error)
//             })
//     }
// }


export function getSellerProducts(user) {
    // const authString = auth(user)
    return function (dispatch) {
        axiosInstance.post("/seller/product", user)
            .then((response) => {
                console.log("response in then", response)
                if (response.status === 200) {
                    dispatch(SellerProducts(response.data))
                }

            }).catch((error) => {
                console.log(error)
            })
    }
}