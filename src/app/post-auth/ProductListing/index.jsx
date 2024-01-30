import React, { useEffect, useState, useContext } from "react";
import ProductSingle from "../../../_components/ProductSingle";
import ProductCategory from "../../../_components/ProductSingle/ProductCategory";
import ProductSearch from "../../../_components/ProductSingle/ProductSearch";
import SubmitButton from "../../../_components/ProductSingle/SubmitButton";
import { AppContext } from "../../../store/Context";
import useRequest from "../../../services/api";

const ProductListing = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;
  const request = useRequest();
  const apiProduct = "/api/product";

  const [productsArray, setProductsArray] = useState([]);
  const [selectedCategory, setSetselectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory) {
      fetchProductsBasedOnCategory();
    } else {
      fetchProducts().then((response) => {
        setProductsArray(response);
      });
    }
  }, [selectedCategory]);

  const fetchProducts = async () => {
    const response = await request.get(apiProduct);
    return response?.data?.result || [];
  };

  const fetchProductsBasedOnCategory = async () => {
    const data = await request.post(apiProduct, {
      category: selectedCategory,
    });
    if (data?.data?.result) {
      setProductsArray(data.data.result);
    } else {
      setProductsArray([]);
    }
  };

  return (
    <>
      <div className="product-header-sec">
        <ProductSearch
          productsArray={productsArray}
          setProductsArray={setProductsArray}
        />
        <ProductCategory
          selectedCategory={selectedCategory}
          setSetselectedCategory={setSetselectedCategory}
        />
      </div>
      <div className="product-section">
        <section className="products-list">
          <div className="container">
            <div className="row">
              {productsArray
                ? productsArray.map((product) => {
                  let cartItem = cart.find((item) => {
                    return item.id === product.id;
                  });
                  return (
                    <ProductSingle
                      key={product?.id}
                      details={product}
                      cartItem={cartItem}
                    />
                  );
                })
                : ""}
            </div>
          </div>
        </section>
        <SubmitButton />
      </div>
    </>
  );
};

export default ProductListing;
