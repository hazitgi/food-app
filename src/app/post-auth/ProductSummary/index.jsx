import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../store/Context";
import ProductSummarySingle from "../../../_components/ProductSummary";
import TotalCart from "../../../_components/ProductSummary/TotalCart";
import useRequest from "../../../services/api";

const ProductSummary = () => {
  const request = useRequest();
  const { state } = useContext(AppContext);
  const { cart } = state;
  const [cartProducts, setCartProducts] = useState([]);


  useEffect(() => {
    if (cart[0]) {
      let product_ids = cart.map((product) => {
        return product.id;
      });
      fetchProducts(product_ids.join("-"));
    }
  }, [cart]);

  const fetchProducts = async (items) => {
    const data = await request.post("/api/product", { items: items });
    if (data?.data?.result) {
      setCartProducts(data.data.result);
    } else {
      setCartProducts([]);
    }
  };

  return (
    <div className="product-summary-sec">
      <div className="product-section">
        <section className="products-summary-list">
          <div className="container">
            <div className="row">
              {cart[0] && cartProducts.map((product) => {
                let cartItem = cart.find(item => {
                  return (item.id === product.id)
                });
                return (
                  <ProductSummarySingle key={product?.id} details={product} cartItem={cartItem} />
                );
              })}
            </div>
          </div>
        </section>
      </div>
      <TotalCart cartProducts={cartProducts} setCartProducts={setCartProducts} cart={cart} />
    </div>
  );
};

export default ProductSummary;
