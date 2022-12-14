import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerProducts } from "store/action/productActions";
import Product from "components/product";
import getDetail from "shared/utils/details";
import "assets/css/productList.css";

export default function SellerProductsList() {
  const dispatch = useDispatch();

  const { sellerProducts } = useSelector((state) => state.productData);
  const { successMessage } = useSelector((state) => state.productData);

  useEffect(() => {
    dispatch(getSellerProducts({ username: getDetail("username") }));
  }, [successMessage]);

  return (
    <>
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
