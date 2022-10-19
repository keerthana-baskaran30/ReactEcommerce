// import Header from "components/Header";
// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from 'react-redux';

// import { useNavigate } from 'react-router-dom';
// import ProductList from "./ProductList";
// import { getSellerProducts } from "store/action/actions";

// export default function () {
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { users } = useSelector(state => state.userData)
//   console.log("users ", users)

//   useEffect(() => {
//     dispatch(getSellerProducts(localStorage.getItem('username'),localStorage.getItem('password')))
//   }, [])

 
//   return (
//     <>
//       <Header/>
//       <ProductList></ProductList>
//     </>
//   )
// }