import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ProductImages } from "data";
import { AddToCart, deleteProduct } from "store/action/actions";

import Button from "react-bootstrap/Button";
import "assets/css/productList.css";
import Modal from "react-bootstrap/Modal";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Product(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState("customer");
  const [show, setShow] = useState(false);

  const { errorMessage } = useSelector((state) => state.productData);
  const { successMessage } = useSelector((state) => state.productData);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (localStorage.getItem("role") === "seller") {
      setUser("seller");
    } else {
      setUser("customer");
    }
  });

  // useEffect(() => {
  //     if (successMessage) {
  //         alert(successMessage)
  //         // dispatch(productAdded())
  //         // navigate('/')
  //     } else if (errorMessage) {
  //         alert(errorMessage)
  //     }
  // }, [successMessage, errorMessage])

  const handleAddToCart = () => {
    if (localStorage.getItem("username")) {
      dispatch(
        AddToCart(props.product.pid, 1, localStorage.getItem("username"))
      );
    } else {
      navigate("/signin");
    }
  };

  const onHandleDelete = () => {
    dispatch(
      deleteProduct(props.product.pid, localStorage.getItem("username"))
    );
    handleClose();
  };

  return (
    <article className="card">
      <div className="card-image">
        <img
          src={ProductImages[props.product.pcategory]}
          alt={props.product.pname}
        />
      </div>
      <div className="card-content">
        <h2 className="card-name">{props.product.pname}</h2>
        <div className="card-list">
          <div>
            <p className="price">Price: $ {props.product.pprice}</p>
            <p> Description : {props.product.pdescription} </p>
          </div>
          <Button onClick={() => navigate(`/viewproduct/${props.product.pid}`)}>
            View{" "}
          </Button>
          {user === "customer" ? (
            <Button onClick={handleAddToCart}>
              {" "}
              <ShoppingCartIcon /> Add to cart
            </Button>
          ) : (
            <>
              <Button
                onClick={() => navigate(`/editProduct/${props.product.pid}`)}
              >
                Edit
              </Button>
              {/* <DeleteProduct product = {props.product}/> */}
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
                  <Button variant="danger" onClick={onHandleDelete}>
                    Delete
                  </Button>
                </Modal.Footer>
              </Modal>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default Product;
