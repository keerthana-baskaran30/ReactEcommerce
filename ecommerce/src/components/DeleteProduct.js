import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { deleteProduct, productDeleted } from 'store/action/actions';


export default function DeleteProduct(props) {

    console.log(props)
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { errorMessage } = useSelector(state => state.productData);
    const { successMessage } = useSelector(state => state.productData);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (successMessage) {
    //         alert(successMessage)
    //         dispatch(productDeleted())
    //         handleClose()
    //     } else if (errorMessage) {
    //         alert(errorMessage)
    //     }
    // }, [successMessage, errorMessage])


    const handleDelete = () => {
        if (localStorage.getItem('username')){
            dispatch(deleteProduct(props.product.pid,localStorage.getItem('username')))
        }
    }

    return (
        <>
            <Button variant="danger" onClick={handleShow}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Deletion?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Delete {props.product.pname}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

