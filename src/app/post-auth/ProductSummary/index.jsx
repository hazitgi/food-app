import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../../App";
import ProductSummarySingle from "../../../_components/ProductSummary";
import TotalCart from "../../../_components/ProductSummary/TotalCart";

const ProductSummary = () => {
  const apiProduct = "https://food-admin.apto.co.in/api/product";

  const [productsSummaryArray, setProductsSummaryArray] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setProductsSummaryArray(response.data);
    });
  }, []);

  const fetchData = async () => {
    const response = await fetch(apiProduct);
    return await response.json();
  };

  const titleContext = useContext(MyContext);
  titleContext.changeTitle("Product Summary");
  return (
    <div className="product-summary-sec">
      <div className="product-section">
        <section className="products-summary-list">
          <div className="container">
            <div className="row">
              {productsSummaryArray
                ? productsSummaryArray.map((product) => {
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
