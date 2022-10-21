import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import validateForm, { onSubmitValidate } from 'shared/utils/validateForm';
import { Container } from 'assets/css/container';
import { Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import 'assets/css/Signin.css'
import { addProducts,getSingleProduct,productAdded, updateProduct } from 'store/action/actions';



function AddProduct() {

    const initialState = {
        "pid": "",
        "pname": "",
        "pdescription": "",
        "pprice": "",
        "pcategory": "",
    }

    // let {id} = useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const {singleProduct} = useSelector((state) => state.productData)

    const [product, setProduct] = useState(initialState )
    const [error, setError] = useState({})
    const [buttonDisable, setButtonDisable] = useState(true)
    
    const { errorMessage } = useSelector(state => state.productData);
    const { successMessage } = useSelector(state => state.productData);

    useEffect(() => {
        if (successMessage) {
            alert(successMessage)
            dispatch(productAdded())
            navigate('/')
        } else if (errorMessage) {
            alert(errorMessage)
        }
    }, [successMessage, errorMessage])


    // console.log(singleProduct)
    const handleChange = (event) => {
        const errorMessage = validateForm(event.target.name, event.target.value)
        setProduct({ ...product, [event.target.name]: event.target.value })
        setError({ ...error, [event.target.name]: errorMessage })
        console.log(product)

        const formIsValid = Object.values(product).every(value => {
            if (value !=="") {
                return true;
            }
            return false;
        })
        const errorIsEmpty = Object.values(error).every(value => {
            if (value === "") {
                return true;
            }
            return false;
        })
        formIsValid && errorIsEmpty ? setButtonDisable(false) : setButtonDisable(true)
    }

    const onSubmitProduct = (e) => {
        e.preventDefault();
        console.log("add product")
        dispatch(addProducts(product,{"username":localStorage.getItem('username')}))
    }

    return (
        <>
                <h2>Add Product </h2>
                <Form method='POST' onSubmit={onSubmitProduct}>
                    <Form.Group className="mb-3" controlId="formBasicPid">
                        <Form.Label  style={{ color: "#0b2c6e", fontSize: "28px", fontWeight: "bold" }}>Product ID</Form.Label>
                        <Form.Control type = "text" onChange={handleChange} value = {product.pid } name='pid' style={{ color: "black", fontSize: "18px" }}  />
                        <span>{error.pid}</span>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPname">
                        <Form.Label style={{ color: "#0b2c6e", fontSize: "28px", fontWeight: "bold" }}>Product Name</Form.Label>
                        <Form.Control type = "text" onChange={handleChange} value = {product.pname } name='pname' style={{ color: "black", fontSize: "18px" }} />
                        <span>{error.pname}</span>

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPprice">
                        <Form.Label  style={{ color: "#0b2c6e", fontSize: "28px", fontWeight: "bold" }}>Product Price</Form.Label>
                        <Form.Control onChange={handleChange} value = {product.pprice } name='pprice' style={{ color: "black", fontSize: "18px" }}  />
                        <span>{error.pprice}</span>

                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3} style={{ color: "#0b2c6e", fontSize: "28px", fontWeight: "bold" }}>Category</Form.Label>
                        <Col sm={8}>
                            <Form.Select name="pcategory" onChange={handleChange}>
                                <option>select</option>
                                <option name="handleChange" value="Mens clothing">Mens clothing</option>
                                <option name="handleChange" value="Kids clothing">Kids clothing</option>
                                <option name="handleChange" value="Women clothing">Women clothing</option>
                            </Form.Select>
                        </Col>
                        <span>{error.pcategory}</span>
                    </Form.Group>

                    
                    <Form.Group className="mb-3" controlId="formBasicPdescription">
                        <Form.Label style={{ color: "#0b2c6e", fontSize: "28px", fontWeight: "bold" }}>Description</Form.Label>
                        <Form.Control onChange={handleChange}  value = {product.pdescription }  name='pdescription' style={{ color: "black", fontSize: "18px" }}  />
                        <span>{error.pdescription}</span>

                    </Form.Group>
                    <Form.Group>
                        <Button variant="primary" type ="submit" color="primary" disabled={buttonDisable}>Add Product</Button>
                        
                    </Form.Group>
                </Form> 
                <button className="btn btn-primary" onClick={() => navigate(-1)} >Go Back</button>

        </>
    )
}

export default AddProduct