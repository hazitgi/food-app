import React, { useContext, useState, useEffect } from "react";
import { MyContext } from "../../../App";
import ProductSummarySingle from "../../../_components/ProductSummary";
import TotalCart from "../../../_components/ProductSummary/TotalCart";
import request from "../../../services/api";

const ProductSummary = () => {
  const apiProduct = "/api/product";

  const [productsSummaryArray, setProductsSummaryArray] = useState([]);

  useEffect(() => {
    fetchData().then((response) => {
      setProductsSummaryArray(response);
    });
  }, []);

  const fetchData = async () => {
    const response = await request.get(apiProduct);
    if(response?.data?.result[0]){
      return response.data.result
    }
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
