import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { displayProducts, getSellerProducts, SellerProducts } from 'store/action/actions';
import 'assets/css/productList.css';
import { Container } from 'assets/css/container';
import Header from 'components/Header';
import Product from 'components/Product';



export default function SellerProductsList() {
    const dispatch = useDispatch()
    
    const {sellerProducts} = useSelector((state) => state.productData);
    

    // console.log(sellerProducts,"djjc")

    useEffect(() => {
        dispatch(getSellerProducts({"username":localStorage.getItem('username')}))
    },[])

   
    return (
        <>
            {/* {props.filter ? <Header /> : <></>} */}
            <Container>
                <div className='wrapper'>
                    <ul className="card-grid">
                        {sellerProducts.map((product) => (
                               <Product product = {product} key={product.id}/>
                        ))}
                    </ul>
                </div>

            </Container>
        </>


    )
}

