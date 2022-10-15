import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import ProductList from "pages/ProductList";
import Dashboard from "pages/Dashboard";

function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path = "/dashboard" element={<Dashboard/>}/>
            <Route path="/MensClothing" element={<ProductList props = {"Mens Clothing"} />} />
            <Route path="/KidsClothing" element={<ProductList props = {"Kids Clothing"}/>} />
            <Route path="/WomenClothing" element={<ProductList props = {"Women Clothing"}/>} />
        </Routes>
    );
}
export default Router;