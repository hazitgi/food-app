import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../store/Context";
import ProductSummarySingle from "../../../_components/ProductSummary";
import TotalCart from "../../../_components/ProductSummary/TotalCart";
import request from "../../../services/api";

const ProductSummary = () => {
  const context  = useContext(AppContext);
  console.log("context.cartCount",context.user);

  const apiProduct = "/api/product";

  // const [productsSummaryArray, setProductsSummaryArray] = useState([]);
  const {cart, cartCount, title} = context

  console.log(cart, cartCount, title);

  useEffect(() => {

  }, []);

  const fetchData = async () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    for(let item of cartItems) {
      console.log(item, "item item item");
      const response = await request.post(apiProduct , {items:item.id});
      console.log(response.data.result);
    }
    const response = await request.post(apiProduct);
    return response.data.result;


  };



  useEffect(() => {

  }, [])
  
  return (
    <div className="product-summary-sec">
      <div className="product-section">
        <section className="products-summary-list">
          <div className="container">
            <div className="row">
              {cart
                ? cart.map((product) => {
                  {console.log("inside from dom",product);}
                    return (
                      <ProductSummarySingle
                        key={product?.id}
                        details={product}
                      />
                    );
                  })
                : ""}
            </div>
          </div>
        </section>
      </div>
      <TotalCart />
    </div>
  );
};

export default ProductSummary;
