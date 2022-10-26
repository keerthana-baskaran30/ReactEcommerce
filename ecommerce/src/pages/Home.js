import React, { useState, useEffect } from "react";

import Header from "components/Header";
import CategoryComponent from "components/CategoryComponent";
import ProductList from "./ProductList";
import Footer from "components/Footer";
import SellerProductsList from "./SellerProductList";

export default function Home() {
  const [homePage, setHomePage] = useState("");

  useEffect(() => {
    if (localStorage.getItem("username") && localStorage.getItem("email")) {
      if (localStorage.getItem("role") === "customer") {
        setHomePage("customer");
      } else if (localStorage.getItem("role") === "seller") {
        setHomePage("seller");
      } else {
        setHomePage("/");
      }
    }
  }, []);

  return (
    <div>
      <Header />
      {homePage === "customer" ? (
        <>
          <CategoryComponent />
          <ProductList />
        </>
      ) : homePage === "seller" ? (
        <SellerProductsList />
      ) : (
        <>
          <CategoryComponent />
          <ProductList />
        </>
      )}
      <Footer />
    </div>
  );
}
