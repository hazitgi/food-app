import React from "react";

const TotalCart = () => {
  return (
    <section className="cart-total">
      <div className="container">
        <div className="row">
          <div className="car-wrap">
            <div className="tatal-area">
              <h3 className="total">Total</h3>
              <div className="total-amount">₹ 2500</div>
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
