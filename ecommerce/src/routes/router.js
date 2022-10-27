import { Route, Routes } from "react-router-dom";

import Home from "pages/home";
import SignIn from "components/signIn";
import SignUp from "components/signUp";
import ProductList from "pages/productList";
import ViewProduct from "components/viewProduct";
import ValidateSession from "shared/utils/validateSession";
import ViewProfile from "components/viewProfile";
import AddProduct from "components/addProduct";
import DeleteProduct from "components/deleteProduct";
import EditProduct from "components/editProduct";
import CartPage from "pages/cartPage";

function Router() {
  return (
    <>
      <ValidateSession />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/searchProducts/:searchField" element={<ProductList />} />
        <Route path="/profile" element={<ViewProfile />} />
        <Route path="/addProducts" element={<AddProduct />} />
        <Route path="/editProduct/:id" element={<EditProduct />} />
        <Route path="/deleteProduct/:id" element={<DeleteProduct />} />
        <Route path="viewproduct/:id" element={<ViewProduct />} />
        <Route path="/category/:category" element={<ProductList/>}/>
        {/* <Route path="/category" element={<></>}>
            <Route path=":category" element={<ProductList />} />
        </Route> */}

        <Route
          path="/MensClothing"
          element={<ProductList filter={"Mens clothing"} />}
        />
        <Route
          path="/KidsClothing"
          element={<ProductList filter={"Kids clothing"} />}
        />
        <Route
          path="/WomenClothing"
          element={<ProductList filter={"Women clothing"} />}
        />
        <Route
          path="/electronics"
          element={<ProductList filter={"electronics"} />}
        />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}
export default Router;
