import { Route, Routes } from "react-router-dom";
import Home from 'pages/Home';
import SignIn from 'components/SignIn';
import SignUp from 'components/SignUp';
import ProductList from "pages/ProductList";
import Dashboard from "pages/Dashboard";
import SellerDashboard from "pages/SellerDashboard";
import ViewProduct from "components/ViewProduct"
import ValidateSession from "shared/utils/ValidateSession";
import ViewProfile from "components/ViewProfile";
import AddProduct from "components/AddProduct";
import DeleteProduct from "components/DeleteProduct";
import EditProduct from "components/EditProduct";
import CartPage from "pages/CartPage";

function Router() {
    return (
        <>
        <ValidateSession/>
        <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path ="/searchProducts/:searchField" element = {<ProductList/>}/>
            <Route path = "/profile" element={<ViewProfile/>}/>
            <Route path = "/addProducts" element = {<AddProduct/>}/>
            <Route path = "/editProduct/:id" element = {<EditProduct/>}/>
            <Route path = "/deleteProduct/:id" element = {<DeleteProduct/>}/>
            <Route path='viewproduct/:id' element={<ViewProduct />} />
            <Route path="/MensClothing" element={<ProductList filter = {"Mens clothing"} />} />
            <Route path="/KidsClothing" element={<ProductList filter = {"Kids clothing"}/>} />
            <Route path="/WomenClothing" element={<ProductList filter = {"Women clothing"}/>} />
            <Route path = "/cart" element = {<CartPage/>}/>
        </Routes>
        </>
        
    );
}
export default Router;