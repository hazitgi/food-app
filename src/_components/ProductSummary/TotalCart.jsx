import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../store/Context";

const TotalCart = ({ cartProducts }) => {
  const { state } = useContext(AppContext);
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
    }else{
      settotalPrice(0);
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
              <span className="btn btn-secondary">Check Out</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalCart;
