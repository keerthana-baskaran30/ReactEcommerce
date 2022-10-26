import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getSellerProducts } from "store/action/actions";
import Product from "components/Product";

import "assets/css/productList.css";

export default function SellerProductsList() {
  const dispatch = useDispatch();

  const { sellerProducts } = useSelector((state) => state.productData);
  const { successMessage } = useSelector((state) => state.productData);

  console.log(successMessage, "djjc");

  useEffect(() => {
    dispatch(getSellerProducts({ username: localStorage.getItem("username") }));
  }, [successMessage]);

  return (
    <>
      {/* {props.filter ? <Header /> : <></>} */}
      <div className="wrapper">
        <ul className="card-grid">
          {sellerProducts.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </ul>
      </div>
    </>
  );
}
