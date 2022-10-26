import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { displayProducts } from "store/action/actions";
import Header from "components/Header";
import Product from "components/Product";
import CategoryComponent from "components/CategoryComponent";

import "assets/css/productList.css";
import Footer from "components/Footer";

export default function ProductList(props) {
  const dispatch = useDispatch();

  let { searchField } = useParams();
  const { products } = useSelector((state) => state.productData);
  const search_parameters = ["pname", "pcategory", "pprice", "pdescription"];
  let productsToDisplay;

  useEffect(() => {
    dispatch(displayProducts(props.filter));
  }, [props.filter]);

  useEffect(() => {
    if (localStorage.getItem("role") === "seller") {
    }
  });
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
          {productsToDisplay.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}
