import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { ProductImages } from "data";
import { AddToCart, getSingleProduct } from "store/action/actions";
import CategoryComponent from "./CategoryComponent";
import Header from "./Header";

import "assets/css/viewProduct.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Footer from "./Footer";

function ViewProduct() {
  let { id } = useParams();
  const { singleProduct } = useSelector((state) => state.productData);
  const { errorMessage } = useSelector((state) => state.productData);
  const { successMessage } = useSelector((state) => state.productData);

  const [user, setUser] = useState("customer");
  const [buttonContent, setButtonContent] = useState("Add to cart");
  console.log("SINGLE", singleProduct);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("inside useffect");
    dispatch(getSingleProduct(id));
  }, []);

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
  //         setButtonContent("Added")
  //         dispatch(productAdded())
  //         // navigate('/')
  //     } else if (errorMessage) {
  //         alert(errorMessage)
  //     }
  // }, [successMessage, errorMessage])

  const handleAddToCart = () => {
    if (localStorage.getItem("username")) {
      dispatch(
        AddToCart(singleProduct.pid, 1, localStorage.getItem("username"))
      );
    } else {
      navigate("/signin");
    }
  };

  return (
    <>
      <Header />
      <CategoryComponent />
      <div className="container view-product">
        <div id="demo" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card">
                <div className="row">
                  <div className="col-md-6 text-center align-self-center">
                    <img
                      className="img-fluid"
                      src={ProductImages[singleProduct?.pcategory]}
                      alt={singleProduct.pname}
                    />
                  </div>
                  <div className="col-md-6 info">
                    <div className="row title">
                      <div className="col">
                        <h2>{singleProduct.pname}</h2>
                      </div>
                    </div>
                    <div className="row price">
                      <div className="row">
                        <h3>
                          <b>Price: ₹{singleProduct.pprice}</b>
                        </h3>
                      </div>
                    </div>
                    <div className="row price">
                      <div className="row">
                        <h3>
                          <b>Description: {singleProduct.pdescription}</b>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row lower">
                  <div className="col text-left align-self-center">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(-1)}
                    >
                      Go Back
                    </button>
                  </div>

                  {user === "customer" ? (
                    <div className="col text-right align-self-center">
                      <button
                        className="btn btn-success"
                        onClick={handleAddToCart}
                      >
                        <ShoppingCartIcon /> {buttonContent}
                      </button>
                    </div>
                  ) : (
                    <div className="col text-right align-self-center">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          navigate(`/editProduct/${singleProduct.pid}`)
                        }
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ViewProduct;
