import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';

import { displayProducts, getSellerProducts } from 'store/action/actions';
import 'assets/css/productList.css';
import { Container } from 'assets/css/container';
import Header from 'components/Header';
import Product from 'components/Product';



export default function ProductList(props) {
    const dispatch = useDispatch()
    
    let { searchField } = useParams()
    const { products } = useSelector((state) => state.productData);
    const search_parameters = ["pname","pcategory"]
    let productsToDisplay;

    useEffect(() => {
        dispatch(displayProducts(props.filter))  
    },[props.filter])


    if(searchField){
        productsToDisplay = products.filter((item) => {
            return search_parameters.some((newItem) => {
                console.log("item[newItem]", item[newItem])
                return (
                    item[newItem].toString().toLowerCase().indexOf(searchField.toLowerCase()) > -1
                );
            });
        })
        console.log("searched",productsToDisplay)
    } else{
        productsToDisplay = products
    }

    return (
        <>
            {props.filter ? <Header /> : <></>}
            <Container>
                <div className='wrapper'>
                    <ul className="card-grid">
                        {productsToDisplay.map((product) => (
                               <Product product = {product} key={product.id}/>
                        ))}
                    </ul>
                </div>

            </Container>
        </>
    )
}