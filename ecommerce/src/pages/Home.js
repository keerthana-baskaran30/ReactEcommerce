import React, { useState, useEffect } from "react";
import Header from "components/Header";
import CarousleProduct from "components/CarousleProduct";
import CategoryComponent from "components/CategoryComponent";
import ProductList from "./ProductList";
import Footer from "components/Footer";
import { useSelector } from "react-redux";
import SellerProductsList from "./SellerProductList";

export default function Home() {

    const [homePage, setHomePage] = useState("")

    // console.log("user",users)
    useEffect(() => {
        if (localStorage.getItem('username') && localStorage.getItem('email')) {
            if (localStorage.getItem('role') === "customer") {
                setHomePage("customer")
                // console.log("setter hompage customer")

            } else if (localStorage.getItem('role') === "seller") {
                setHomePage("seller")
                // console.log("setter hompage dc")

            } else {
                setHomePage("/")
                // console.log("setter hompage")
            }
        }
    }, [])

    return (
        <div>
            {/* <Header />
            <h1 style={{ textAlign: 'center', marginTop: '20px' }}>Welcome !!</h1>
            {homePage === "customer" || homePage === "" ? (<> */}
                {/* <CarousleProduct/> */}
                {/* <CategoryComponent />
                <ProductList />
            </>) : <>
                <SellerProductsList />
            </>} */}

            <Header />
            {homePage === 'customer' ? <>
                <CategoryComponent />
                <ProductList />
            </> : (homePage === 'seller' ? <SellerProductsList /> : <>
                <CategoryComponent />
                <ProductList />
            </>)}
            <Footer />


        </div>


    )
}