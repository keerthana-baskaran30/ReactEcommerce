import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import '../assets/css/Signin.css'
import validateForm, { onSubmitValidate } from 'shared/utils/validateForm';
import registerData from '../store/action/actions';
import { useDispatch } from "react-redux";


function SignUp() {

    const initialState = {
        "first_name": "",
        "last_name": "",
        "username": "",
        "email": "",
        "phone": "",
        "sex": "",
        "address": "",
        "password": ""
    }
    const dispatch = useDispatch();
    const [user, setUser] = useState(initialState)
    const [error, setError] = useState({})

    const handleOnChange = (event) => {
        const errorMessage = validateForm(event.target.name, event.target.value)
        setUser({ ...user, [event.target.name]: event.target.value })
        setError({ ...error, [event.target.name]: errorMessage })
        console.log(user)
    }



    const submituserRegistrationForm = (e) => {
        e.preventDefault();
        const errorObject = onSubmitValidate(user,"signin")
        setError(errorObject)
        if (Object.values(errorObject).every(value => {
            if (value === "") {
                return true;
            }
            return false;
        })){
            console.log(user)
            console.log(registerData(user))
            
            dispatch(registerData(user))

        }
    }

    return (
        <>
            <div className='container-signin'>
                <h3>Register</h3>
                <Form method='POST' onSubmit={submituserRegistrationForm}>
                    <Form.Group className="mb-3" controlId="formBasicFirst_name">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control name="first_name" onChange={handleOnChange} type="text" placeholder="Enter first_name" />
                        <span>{error.first_name}</span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicLast_name">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control name="last_name" onChange={handleOnChange} type="text" placeholder="Enter last_name" />
                        <span>{error.last_name}</span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>UserName</Form.Label>
                        <Form.Control name="username" onChange={handleOnChange} type="text" placeholder="Enter n" />
                        <span>{error.n}</span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" onChange={handleOnChange} type="email" placeholder="Enter email" />
                        <span>{error.email}</span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control name="phone" onChange={handleOnChange} type="tel" placeholder="Enter phone number" />
                        <span>{error.phone}</span>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3">
                        <Form.Label column sm={3}>Gender</Form.Label>
                        <Col sm={8}>
                            <Form.Select name="sex" onChange={handleOnChange}    >
                                <option>select</option>
                                <option name="sex" value="M">Male</option>
                                <option name="sex" value="F">Female</option>
                                <option name="sex" value="O">Others</option>
                            </Form.Select>
                            <span>{error.sex}</span>
                        </Col>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name="address" onChange={handleOnChange} type="text" placeholder="Enter Address" />
                        <span>{error.address}</span>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />
                        <span>{error.password}</span>
                    </Form.Group>
                    <Button variant="primary" type="submit" >
                        Sign Up
                    </Button>

                    <Row className="py-3">
                        <Col>
                            Have an Account ?{" "}
                            <Link to='/signin'>Sign In</Link>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>

    )
}


export default SignUp;