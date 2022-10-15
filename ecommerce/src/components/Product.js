import React, { useState, useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { ProductImages } from 'data';
import styled from "styled-components";
import { displayProducts } from 'store/action/actions';

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-around;
`;


export default function Product(props) {
    const dispatch = useDispatch()
    const { products} = useSelector((state) => state.productData);
    // const [productsToDisplay, setProductsToDisplay] = useState(null)
   
   

    useEffect(()=>{
        console.log("effect")
        dispatch(displayProducts())
    },[])

    console.log(products)

    // console.log(storeData)  
    console.log(props.filter)


    return (
        <Container>

            {products === null || products === undefined ? <p></p> : <>{products.map((product) => <Card style={{ width: '15rem' }} key={product.pid}>
                <Card.Img variant="top" src={ProductImages[product.pcategory]} />
                <Card.Body>
                    <Card.Title>{product.pname}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.pprice}</Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                </Card.Body>
            </Card>)}</>}
        </Container>

    )
}