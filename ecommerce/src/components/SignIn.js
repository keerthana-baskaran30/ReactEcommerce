import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {loginData} from '../store/action/actions';

import { Link, useNavigate} from 'react-router-dom';
import { Button, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import '../assets/css/Signin.css'
import validateForm, { onSubmitValidate } from 'shared/utils/validateForm';
import auth from '../shared/utils/auth';


function SignIn() {
    const initialState = {
        "username": "",
        "password": ""
    }
    const dispatch = useDispatch();
    const [user, setUser] = useState(initialState)
    const [error, setError] = useState({})
    const navigate = useNavigate();
    const {users} = useSelector(state => state.userData)
    


    const handleOnChange = (event) => {
        const errorMessage = validateForm(event.target.name, event.target.value)
        setUser({ ...user, [event.target.name]: event.target.value })
        setError({ ...error, [event.target.name]: errorMessage })
        console.log(user)
    }

    const submitLoginForm = (e) => {
        e.preventDefault();
        const errorObject = onSubmitValidate(user, "login")
        setError(errorObject)
        if (Object.values(errorObject).every(value => {
            if (value === "") {
                return true;
            }
            return false;
        })) {
            dispatch(loginData(user))
            
            if (localStorage.getItem("authString")){
                navigate("/dashboard"); 
            }
        }
    }

    return (
        <div className='container-signin'>
            <h3>Sign In</h3>
            <Form method='POST' onSubmit={submitLoginForm}>
                <Form.Group className="mb-3" controlId="formBasicuserName">
                    <Form.Label>UserName<sup>*</sup></Form.Label>
                    <Form.Control name="username" onChange={handleOnChange} type="text" placeholder="Enter userName" />
                    <span>{error.username}</span>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" />
                    <span>{error.password}</span>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
                <Row className="py-3">
                    <Col>
                        New user ?{" "}
                        <Link to='/signup'>Sign Up</Link>
                    </Col>
                </Row>
            </Form>
        </div>

    )
}


export default SignIn;