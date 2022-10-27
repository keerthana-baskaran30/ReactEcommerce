import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { displayProducts } from "store/action/productActions";
import Header from "components/header";
import Product from "components/product";
import CategoryComponent from "components/categoryBar";
import getDetail from "shared/utils/details";
import success, { failure } from "shared/utils/alertMessages";
import { productAdded } from "store/action/productActions";


import "assets/css/productList.css";
import Footer from "components/footer";
import notFound from 'assets/images/notFound.png';

export default function ProductList(props) {
  const dispatch = useDispatch();

  let { searchField } = useParams();
  const { products } = useSelector((state) => state.productData);
  const { errorMessage } = useSelector((state) => state.productData);
  const { successMessage } = useSelector((state) => state.productData);
  const search_parameters = ["pname", "pcategory", "pprice", "pdescription"];
  let productsToDisplay;

  useEffect(() => {
    dispatch(displayProducts(props.filter));
  }, [props.filter]);

  useEffect(() => {
    if (getDetail("role") === "seller") {
    }
  });

  useEffect(() => {
    if (successMessage) {
      success(successMessage)
      dispatch(productAdded())
    } else if (errorMessage) {
      failure(errorMessage)
    }
  }, [successMessage, errorMessage])

  if (searchField) {
    productsToDisplay = products.filter((item) => {
      return search_parameters.some((newItem) => {
        return (
          item[newItem]
            .toString()
            .toLowerCase()
            .indexOf(searchField.toLowerCase()) > -1
        );
      });
    });
  } else {
    productsToDisplay = products;
  }

  return (
    <>
      {props.filter || searchField ? (
        <>
          <Header />
          <CategoryComponent />
        </>
      ) : (
        <></>
      )}
      <div className="wrapper">
        <ul className="card-grid">
          {productsToDisplay.length === 0 ? (<div className="not-found">
            <div>About 0 results </div>
            <div>Your search -{searchField} - did not match any documents.</div>
            <div>
              <b>Suggestions:</b>
              <ul>
                <li>
                  Make sure that all words are spelled correctly.
                </li>
                <li>
                  Try different keywords.
                </li>
                <li>
                  Try more general keywords.
                </li>
              </ul>
            </div> 
            <img src={notFound} alt= "not found"/>
            </div>) : (productsToDisplay.map((product) => (
              <Product product={product} key={product.id} />
            )))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
