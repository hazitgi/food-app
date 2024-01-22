import React from "react";
import { Link } from "react-router-dom";
import CartAddButton from "./CartAddButton";

const ProductSingle = (props) => {
  const { name, product_image, our_price } = props?.details;

  return (
    <div className="single-prod-list show ">
      <div className="product-card">
        <Link to="" className="image">
          <img src={product_image} alt={name} />
        </Link>
        <div className="details">
          <h3 className="product-name">
            <Link to="">{name}</Link>
          </h3>
          <div className="food-orderdetail">
            <div className="orderdetail">
              <span className="price">₹ {our_price}</span>
              <i>10%</i>
            </div>

            <div className="orderdetail">
              <div className="box-peices">10pcs/box</div>
            </div>
          </div>
          <CartAddButton />
          <div className="food-orderdetail">
            <div className="orderdetail">
              <div className="avg-peices">Avg.Qty: 0</div>
            </div>
            <div className="orderdetail">
              <i>Milky Mist</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSingle;
