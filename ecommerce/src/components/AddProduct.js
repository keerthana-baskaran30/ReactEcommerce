import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "./Header";
import validateForm from "shared/utils/validateForm";
import { addProducts, productAdded } from "store/action/actions";

import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import "assets/css/signin.css";

function AddProduct() {
  const initialState = {
    pid: "",
    pname: "",
    pdescription: "",
    pprice: "",
    pcategory: "",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [product, setProduct] = useState(initialState);
  const [error, setError] = useState({});
  const [buttonDisable, setButtonDisable] = useState(true);

  const { errorMessage } = useSelector((state) => state.productData);
  const { successMessage } = useSelector((state) => state.productData);

  useEffect(() => {
    if (successMessage) {
      alert(successMessage);
      dispatch(productAdded());
      navigate("/");
    } else if (errorMessage) {
      alert(errorMessage);
    }
  }, [successMessage, errorMessage]);

  const handleChange = (event) => {
    const errorMessage = validateForm(event.target.name, event.target.value);
    setProduct({ ...product, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: errorMessage });
    console.log(product);

    const formIsValid = Object.values(product).every((value) => {
      if (value !== "") {
        return true;
      }
      return false;
    });
    const errorIsEmpty = Object.values(error).every((value) => {
      if (value === "") {
        return true;
      }
      return false;
    });
    formIsValid && errorIsEmpty
      ? setButtonDisable(false)
      : setButtonDisable(true);
  };

  const onSubmitProduct = (e) => {
    e.preventDefault();
    console.log("add product");
    dispatch(
      addProducts(product, { username: localStorage.getItem("username") })
    );
  };

  return (
    <>
      <Header />
      <div className="container-signin">
        <h2>Add Product </h2>
        <Form method="POST" onSubmit={onSubmitProduct}>
          <Form.Group className="mb-3" controlId="formBasicPid">
            <Form.Label>Product ID</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={product.pid}
              name="pid"
              style={{ color: "black", fontSize: "18px" }}
            />
            <span className="danger-text">{error.pid}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPname">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              value={product.pname}
              name="pname"
              style={{ color: "black", fontSize: "18px" }}
            />
            <span className="danger-text">{error.pname}</span>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPprice">
            <Form.Label>Product Price</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={product.pprice}
              name="pprice"
              style={{ color: "black", fontSize: "18px" }}
            />
            <span className="danger-text">{error.pprice}</span>
          </Form.Group>

          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={3}>
              Category
            </Form.Label>
            <Col sm={8}>
              <Form.Select name="pcategory" onChange={handleChange}>
                <option>select</option>
                <option name="handleChange" value="Mens clothing">
                  Mens clothing
                </option>
                <option name="handleChange" value="Kids clothing">
                  Kids clothing
                </option>
                <option name="handleChange" value="Women clothing">
                  Women clothing
                </option>
                <option name="handleChange" value="electronics">
                  electronics
                </option>
              </Form.Select>
            </Col>
            <span className="danger-text">{error.pcategory}</span>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPdescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              onChange={handleChange}
              value={product.pdescription}
              name="pdescription"
              style={{ color: "black", fontSize: "18px" }}
            />
            <span className="danger-text">{error.pdescription}</span>
          </Form.Group>
          <Form.Group>
            <Button
              variant="primary"
              type="submit"
              color="primary"
              disabled={buttonDisable}
            >
              Add Product
            </Button>
          </Form.Group>
        </Form>
        <Button className="btn btn-primary" onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </div>
    </>
  );
}

export default AddProduct;
