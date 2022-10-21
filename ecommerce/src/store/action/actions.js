import * as types from "./actionTypes";
import axiosInstance from "api/api";

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

export const productAdd = (product) => ({
    type: types.ADD_PRODUCT,
    payload: product
})

export const productNotAdded = (data) => ({
    type:types.PRODUCT_NOT_ADDED,
    payload:data
})

export const productAdded = () => ({
    type:types.PRODUCT_ADDED,
    
})

export const productDelete = (data) => ({
    type:types.DELETE_PRODUCT,
    payload:data
})

export const productNotDeleted = (data) => ({
    type:types.PRODUCT_NOT_DELETED,
    payload:data
})

export const productDeleted = () => ({
    type : types.PRODUCT_DELETED,
})

export const productUpdate = (product) => ({
    type : types.PRODUCT_UPDATE,
    payload : product
})

export const productUpdated = () => ({
    type :types.PRODUCT_UPDATED,
})
export const productNotUpdated = (data) => ({
    type : types.PRODUCT_NOT_UPDATED,
    payload : data
})

export const cartAdd = (data) => ({
    type : types.ADD_TO_CART,
    payload : data
})

export const cartDisplay = (data) => ({
    type : types.DISPLAY_CART,
    payload : data
})

export const cartNotDisplayed = (data) => ({
    type:types.NOT_DISPLAY
})

export const cartDelete = (data) => ({
    type: types.DELETE_CART,
    payload:data
})

export const manageSuccessMessage = () => ({})

export default function registerData(user, role) {
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

export function addProducts(products,user){
    return function (dispatch) {
        axiosInstance.post("seller/product/add", {"product":products,"user":user})
            .then((response) => {
                console.log("response in then", response)
                if (response.status === 201) {
                    dispatch(productAdd(response.data.successMessage))
                }
            }).catch((error) => {
                console.log(error)
                dispatch(productNotAdded(error.response.data.errorMessage))
            })
    }
}

export function deleteProduct(pid,username){
    // console.log(username)
    return function (dispatch) {
        axiosInstance.delete(`seller/product/delete?pid=${pid}`, { data: {"username" : username} })
            .then((response) => {
                console.log("response in delete", response)
                if (response.status === 200) {
                    dispatch(productDelete(response.data.successMessage))
                }
            }).catch((error) => {
                console.log(error)
                dispatch(productNotDeleted(error.response.data.errorMessage))
            })
    }
}

export function updateProduct(pid,product,username){
    return function (dispatch) { 
        axiosInstance.put(`seller/product/update?pid=${pid}`,  {"product":product,"username" : username})
            .then((response) => {
                console.log("response in UPDATE", response)
                if (response.status === 201) {
                    dispatch(productUpdate(response.data.successMessage))
                }
            }).catch((error) => {
                console.log(error)
                dispatch(productNotUpdated(error.response.data.errorMessage))
            })
    }
}

export function AddToCart(pid,qty=1,username){
    return function (dispatch) { 
        axiosInstance.post(`/cart/add?pid=${pid}&qty=${qty}`,  {"username" : username})
            .then((response) => {
                console.log("response in add to cart", response)
                if (response.status === 200 || response.status ===201) {
                    dispatch(cartAdd(response.data))
                }
            }).catch((error) => {
                console.log(error)
                dispatch(productNotUpdated(error.response.data.errorMessage))
            })
    }
}

export function displayCart(username){
    return function (dispatch) { 
        console.log("in display cart");
        axiosInstance.post(`/cartitems`,  {"username" : username})
            .then((response) => {
                console.log("response in display to cart", response.data.data.cartItem)
                if (response.status === 200) {
                    // console.log(response.data)
                    dispatch(cartDisplay(response.data.data.cartItem))
                }
            }).catch((error) => {
                console.log(error)
                dispatch(cartNotDisplayed(error.response.data))
            })
    }
}

export function deleteCart(pid){
    return function (dispatch) { 
        axiosInstance.delete(`/cartitems/delete?pid=${pid}`,  {"data":{"username" : localStorage.getItem('username')}})
            .then((response) => {
                console.log("response in delete to cart", response)
                if (response.status === 200) {
                    console.log("some :",response.data.successMessage)
                    dispatch(cartDelete(response.data.successMessage))
                }
            }).catch((error) => {
                console.log(error)
                // dispatch(productNotUpdated(error.response.data.errorMessage))
            })
    }
}