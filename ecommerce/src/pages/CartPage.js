import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteCart, displayCart, AddToCart } from "store/action/actions";
import Header from "components/Header";
import Footer from "components/Footer";
import { ProductImages } from "data";

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.productData);
  const { errorMessage } = useSelector((state) => state.productData);
  const { successMessage } = useSelector((state) => state.productData);

  useEffect(() => {
    console.log("call use effect");
    if (localStorage.getItem("username")) {
      console.log("in display cart");
      dispatch(displayCart(localStorage.getItem("username")));
    } else {
      navigate("/signin");
    }
  }, [successMessage]);

  // console.log("cart : ", cart);

  // useEffect(() => {
  //     if (successMessage) {
  //         alert(successMessage)
  //         console.log("in display cart");
  //         dispatch(displayCart(localStorage.getItem('username')))
  //         // dispatch(productDeleted())
  //     } else if (errorMessage) {
  //         alert(errorMessage)
  //     }
  // }, [successMessage, errorMessage])

  const DeleteCart = (pid) => {
    dispatch(deleteCart(pid));
  };

  const DecreaseQuantity = (pid) => {
    dispatch(AddToCart(pid, -1, localStorage.getItem("username")));
  };

  const IncreaseQuantity = (pid) => {
    dispatch(AddToCart(pid, 1, localStorage.getItem("username")));
  };

  const TotalPrice = (price, qty) => {
    return price * qty;
  };

  const totalAmount = () => {
    let total = 0;
    cart &&
      cart.map((item) => {
        total += item.pprice * item.pqty;
        return total;
      });
    return total;
  };

  return (
    <>
      <Header />
      <div className="row">
        <div className="col-md-12">
          <h1>Cart</h1>
          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
              </tr>
            </thead>
            <tbody>
              {cart &&
                cart.map((item) => {
                  return (
                    <tr key={item.pid}>
                      <td>
                        <i
                          className="btn btn-primary"
                          onClick={() => DeleteCart(item.pid)}
                        >
                          X
                        </i>
                      </td>
                      <td>{item.pname}</td>
                      <td>
                        <img
                          src={ProductImages[item.pcategory]}
                          alt={item.pname}
                          style={{ width: "100px", height: "80px" }}
                        />
                      </td>
                      <td>{item.pprice} $</td>
                      <td>
                        <span
                          className="btn btn-primary"
                          style={{ margin: "2px" }}
                          onClick={() => DecreaseQuantity(item.pid)}
                        >
                          -
                        </span>
                        <span className="btn btn-info">{item.pqty}</span>
                        <span
                          className="btn btn-primary"
                          style={{ margin: "2px" }}
                          onClick={() => IncreaseQuantity(item.pid)}
                        >
                          +
                        </span>
                      </td>
                      <td>{TotalPrice(item.pprice, item.pqty)} $</td>
                    </tr>
                  );
                })}
              <tr>
                <td colSpan="5">Total Cart</td>
                <td>{totalAmount()}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default CartPage;
