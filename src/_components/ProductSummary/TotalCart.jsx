import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/Context";
import useRequest from "../../services/api";
import { useNavigate } from "react-router-dom";

const TotalCart = ({ cartProducts }) => {
  const { state, dispatch } = useContext(AppContext);
  const request = useRequest();
  const navigate = useNavigate();

  let { cart } = state;
  const [totalPrice, settotalPrice] = useState(0);
  useEffect(() => {
    calculateTotalPrice();
  }, [cartProducts, cart]);

  const calculateTotalPrice = () => {
    let singleItemPrice = [];
    if (cart[0]) {
      cartProducts.forEach((element) => {
        let price = element?.our_price;
        let qty = state.cart.find((item) => item.id === element.id);
        singleItemPrice.push(price * qty?.count);
      });
      let total = singleItemPrice.reduce((a, b) => a + b, 0);
      settotalPrice(total);
    } else {
      settotalPrice(0);
    }
  };

  const checkoutCartItems = () => {
    if (cart[0]) {
      let itemForCheckout = cart.map((item) => {
        return {
          id: item.id,
          quantity: item.count,
        };
      });
      request({
        url: "/api/cart",
        method: "POST",
        data: {
          json: itemForCheckout,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            dispatch({
              type: "SET_CART",
              payload: [],
            })
            localStorage.removeItem("cart");

            console.log(">>>>>>>>>>");
            alert("Checkout Successful");
            navigate("/");
          } else {
            console.log(res.data, ">>>>>>>>>>");
          }
        })
        .catch((err) => {
          console.log(err);
          alert(err?.message);
        });
    }
  };

  return (
    <section className="cart-total">
      <div className="container">
        <div className="row">
          <div className="car-wrap">
            <div className="tatal-area">
              <h3 className="total">Total</h3>
              <div className="total-amount">₹ {totalPrice}</div>
            </div>
            <div className="checkout-btn">
              <span
                className="btn btn-secondary"
                onClick={() => checkoutCartItems()}
              >
                Check Out
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalCart;
